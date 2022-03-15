pipeline {
    environment {
      registry = 'http://10.244.0.190'
      tag = 'registry.thecodeworkers.com/pix-business-web'
      registryCredential = 'DockerRegistry'
      dockerImage = ''
      API_TOKEN = credentials('kubernetesSecret')
    }
    agent any

    stages {
      stage('Sonar Scanner') {
        steps {
          withSonarQubeEnv('Sonarqube TCW') {
            sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=pix-business-web"
          }
          /* timeout(time: 1, unit: 'HOURS') {
            waitForQualityGate abortPipeline: true
          } */
        }
      }
      /* stage('Build Test') {
        steps {
          yarn 'install'
          yarn 'build'
          sh 'rm -R node_modules'
        }
      } */
      stage('Docker Build') {
        when {
          anyOf {
            expression { env.GIT_BRANCH == 'origin/dev' }
          }
        }
        steps {
          script {
            docker.withRegistry(registry, registryCredential ) {
              docker.build("pix-business-web:$BUILD_NUMBER", '-f Dockerfile ./').push()
              docker.build("pix-business-web:latest-$DEPLOY_TO", '-f Dockerfile ./').push()
            }
          }
          sh "docker rmi $tag:$BUILD_NUMBER"
          sh "docker rmi $tag:latest-$DEPLOY_TO"
        }
      }
      stage('Kubernetes Deploy') {
        when {
          anyOf {
            expression { env.GIT_BRANCH == 'origin/dev' }
          }
        }
        steps {
          sh "kubectl --token $API_TOKEN --server https://10.96.0.1 --insecure-skip-tls-verify=true delete -f ./scripts/$DEPLOY_TO | true"
          sh "kubectl --token $API_TOKEN --server https://10.96.0.1 --insecure-skip-tls-verify=true apply -f ./scripts/$DEPLOY_TO"
        }
      }
    }

}

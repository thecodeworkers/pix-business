import React from 'react';
import './styles.scss';
import { Export } from '../../assets/img';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const ExportButton = (props: any) => {

  const { data, name, flag } = props;

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData: any, fileName: string) => {
    if (data && flag == 'csv') {
      const toJson = XLSX.utils.json_to_sheet(csvData);
      const sheet = { Sheets: { 'data': toJson }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(sheet, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, `${fileName}${fileExtension}`);
    }
  }

  const exportToPDF = () => {
    return false;
  };

  return (
    <button className='_exportButton'
      onClick={
        flag == 'csv' && data ? () => exportToCSV(data, name ? name : 'document') : () => exportToPDF()}
    >
      Export <div className='_exportIcon'><Export /></div>
    </button>
  )
}

export default ExportButton;
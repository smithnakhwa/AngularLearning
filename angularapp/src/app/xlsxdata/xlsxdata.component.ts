import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-xlsxdata',
  templateUrl: './xlsxdata.component.html',
  styleUrls: ['./xlsxdata.component.css']
})
export class XlsxdataComponent implements OnInit {
xlsdata:any;
  constructor() { }

  ngOnInit() {
  }
  uploadFile(val){
    const target: DataTransfer=<DataTransfer>(val.target);
    const reader : FileReader=new FileReader();
    reader.onload=(e:any)=>{
      const bstr: string=e.target.result;
      // console.log('bstr',bstr);
      const wb: XLSX.WorkBook=XLSX.read(bstr,{type:'binary'});
      // console.log('wb',wb);
      const wsname = wb.SheetNames[0];
      // console.log('wsname',wsname);
      const ws:XLSX.WorkSheet=wb.Sheets[wsname];
      console.log('ws',ws);
      
      let data=(XLSX.utils.sheet_to_json(ws,{header:1}));
      console.log(data);
      this.xlsdata=data;
      
      
      

      
    }
    reader.readAsBinaryString(target.files[0]);
    
  }
}

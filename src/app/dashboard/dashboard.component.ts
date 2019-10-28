import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailComponent } from  '../detail/detail.component'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
data: any;
dataS:any;
  constructor(public dialog: MatDialog) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('prdcts'));
    this.dataS = new MatTableDataSource(this.data);
    //this.dataS = this.data;
    console.log(this.dataS);
    this.dataS.paginator = this.paginator;
  }
  
  detailing(row){
    
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '250px',
      data: row,
    });
  }
  
  displayedColumns: string[] = ['fname', 'prc'];
  //dataSource = this.data;
}

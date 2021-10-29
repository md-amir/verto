import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Unit } from 'src/app/models/unit';

type NewType = MatSort;

@Component({
  selector: 'app-all-units',
  templateUrl: './all-units.component.html',
  styleUrls: ['./all-units.component.css']
})
export class AllUnitsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'star', 'name', 'shortCode', 'group', 'lastUpdatedDate', 'createdDate', 'status', 'option'];
  dataSource = new MatTableDataSource<Unit>(ELEMENT_DATA);
  selection = new SelectionModel<Unit>(true, []);
  @ViewChild('unitPaginator', { static: true }) unitPaginator!: MatPaginator;
  @ViewChild(MatSort) unitSort!: MatSort;



  constructor() { }

  ngOnInit(): void {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Unit): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  handleStarClick(event: Event): void {
    event.stopPropagation();
    {
      (event.currentTarget as HTMLElement).classList.toggle('star-inactive');
    }
  }
}
const ELEMENT_DATA: Unit[] = [
  { id: 1, name: 'Hydrogen', shortCode: 'NICUS', group: 'Clinical Department', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: true },
  { id: 2, name: 'Helium', shortCode: 'IIC', group: 'Institute/Centers', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: false },
  { id: 3, name: 'Lithium', shortCode: 'UCG', group: 'Functional Office', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: true },
  { id: 4, name: 'Beryllium', shortCode: 'REHAB', group: 'Clinical Department', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: true },
  { id: 5, name: 'Boron', shortCode: 'NICUS', group: 'Functional Office', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: false },
  { id: 6, name: 'Carbon', shortCode: 'OP', group: 'Clinical Department', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: true },
  { id: 7, name: 'Nitrogen', shortCode: 'NICUS', group: 'Institute/Centers', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: true },
  { id: 8, name: 'Oxygen', shortCode: 'NICUS', group: 'Functional Office', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: false },
  { id: 9, name: 'Fluorine', shortCode: 'ADMIN', group: 'Institute/Centers', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: true },
  { id: 10, name: 'Neon', shortCode: 'NICUS', group: 'Clinical Department', lastUpdatedDate: "2021-04-22 11:47", createdDate: "2021-04-22 11:47", status: false },
];


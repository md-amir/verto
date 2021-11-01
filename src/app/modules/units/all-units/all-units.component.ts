import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PAGE_SIZE, LENGTH, PAGE_SIZE_OPTIONS } from 'src/app/helper/constants';
import { Unit } from 'src/app/models/unit';
import { ApiService } from 'src/app/services/api.service';

type NewType = MatSort;

@Component({
  selector: 'app-all-units',
  templateUrl: './all-units.component.html',
  styleUrls: ['./all-units.component.css']
})
export class AllUnitsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'star', 'name', 'shortCode', 'group', 'lastUpdatedDate', 'createdDate', 'status', 'option'];
  dataSource: MatTableDataSource<Unit> = new MatTableDataSource<Unit>();
  selection = new SelectionModel<Unit>(true, []);
  @ViewChild('unitPaginator', { static: true }) unitPaginator!: MatPaginator;
  @ViewChild(MatSort) unitSort!: MatSort;
  noSelected: number | undefined = 0;
  units: Unit[] = [];
  pageSize = PAGE_SIZE;
  length = LENGTH;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  paramFormData: FormData;
  paginationArr = [] as any;
  private cdr!: ChangeDetectorRef;




  constructor(private api: ApiService) {
    this.paramFormData = new FormData();
  }

  ngOnInit(): void {
    this.initDefaultParams();
    this.getAllUnits();
    this.noSelected = 0;
  }

  getAllUnits() {
    this.api.getAllUnits(this.paginationArr).subscribe(response => {
      this.units = response;
      this.dataSource = new MatTableDataSource<Unit>(this.units);
      if (this.length != response.size) {
        this.length = 28;
      }
    });
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

  initDefaultParams() {
    this.paginationArr[0] = 1;
    this.paginationArr[1] = 5

  }

  getNext(event: PageEvent) {
    this.paginationArr[0] = event.pageIndex.toString()
    this.paginationArr[1] = event.pageSize.toString()
    this.getAllUnits();
  }

}



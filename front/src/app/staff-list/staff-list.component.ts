import { Component, OnInit } from '@angular/core';
import { StaffService } from '../service/staff.service';
import { Staff } from '../staff.model';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  staffs: Staff[] = [];
  newStaff: Staff = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    position: '',
    salary: 0,
    imageUrl: '',
    phoneNumber: '',
    email: '',
    hireDate: ''
  };
  showCreateForm = false; // Для управління видимістю вікна створення
  showEditForm = false; // Для управління видимістю вікна редагування
  searchLastName: string = '';
  searchResults: Staff[] = [];

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.getStaffs();
  }

  searchByLastName(): void {
    if (this.searchLastName.trim() !== '') {
        this.staffService.getStaffsByLastName(this.searchLastName).subscribe((data: any) => {
            this.searchResults = data._embedded.staff; // Отримання списку співробітників з _embedded.staff
        });
    } else {
        this.searchResults = [];
    }
  }
  cancelSearch(): void {
    this.searchLastName = ''; // Очищення поля введення для пошуку
    this.searchResults = []; // Скидання результатів пошуку
}

  getStaffs(): void {
    this.staffService.getStaffs().subscribe((data: Staff[]) => {
      this.staffs = data;
    });
  }

  deleteStaff(id: number): void {
    this.staffService.deleteStaff(id).subscribe(() => {
      this.getStaffs(); // Оновити список після видалення
    });
  }

  createStaff(): void {
    this.staffService.createStaff(this.newStaff).subscribe((data: Staff) => {
      this.getStaffs(); // Оновити список після створення
      this.closeForm(); // Закрити вікно після створення
    });
  }

  editStaff(staff: Staff): void {
    this.newStaff = { ...staff };
    this.showEditForm = true;
    this.showCreateForm = false;
  }

  updateStaff(): void {
    this.staffService.updateStaff(this.newStaff).subscribe((data: Staff) => {
      this.getStaffs(); // Оновити список після оновлення
      this.closeForm(); // Закрити вікно після оновлення
    });
  }

  openCreateForm(): void {
    this.showCreateForm = true;
    this.showEditForm = false;
    this.resetForm();
  }

  closeForm(): void {
    this.showCreateForm = false;
    this.showEditForm = false;
    this.resetForm();
  }

  cancelCreateForm(): void {
    this.closeForm(); // Закрити форму
  }

  resetForm(): void {
    this.newStaff = {
      id: 0,
      firstName: '',
      lastName: '',
      age: 0,
      position: '',
      salary: 0,
      imageUrl: '',
      phoneNumber: '',
      email: '',
      hireDate: ''
    };
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    'username': new FormControl("", Validators.required),
    'password': new FormControl("", Validators.required)
  })

  constructor(private route: Router,
    private _userService : UserService,
  ){

  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    this._userService.login(this.form.value).subscribe({
      next: (response:any) => {
        localStorage.setItem('token', response.token)
        Swal.fire({
          title: 'Succescfull',
          text: response.msg,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((result:any) => {
          if (result.isConfirmed) {
              this.route.navigate(['/dashboard']); 
          }
        });
      },
      error: (e) => {
        Swal.fire({
          title: 'Error',
          text: e.error.msg,
          icon: 'error',
          confirmButtonText: 'Reintentar'
        });
      }
    });    
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OperationsService } from '../services/operations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-other-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './other-services.component.html',
  styleUrl: './other-services.component.scss'
})
export class OtherServicesComponent {
  items = [
    {
      operation: "Purchase",
      description: "A purchase operation for electronics and gadgets.",
      image: "https://via.placeholder.com/300x200?text=Purchase"
    },
    {
      operation: "Refund",
      description: "Refund issued for a recent transaction.",
      image: "https://via.placeholder.com/300x200?text=Refund"
    },
    {
      operation: "Payment",
      description: "Monthly payment for subscription services.",
      image: "https://via.placeholder.com/300x200?text=Payment"
    },
    {
      operation: "Transfer",
      description: "Funds transferred to another account.",
      image: "https://via.placeholder.com/300x200?text=Transfer"
    },
    {
      operation: "Withdrawal",
      description: "Cash withdrawn from ATM.",
      image: "https://via.placeholder.com/300x200?text=Withdrawal"
    },
    {
      operation: "Deposit",
      description: "Direct deposit of salary into the account.",
      image: "https://via.placeholder.com/300x200?text=Deposit"
    },
    {
      operation: "Chargeback",
      description: "Chargeback initiated for a disputed transaction.",
      image: "https://via.placeholder.com/300x200?text=Chargeback"
    },
    {
      operation: "Loan Payment",
      description: "Scheduled loan payment processed.",
      image: "https://via.placeholder.com/300x200?text=Loan+Payment"
    },
    {
      operation: "Subscription Renewal",
      description: "Auto-renewal for the monthly subscription.",
      image: "https://via.placeholder.com/300x200?text=Subscription+Renewal"
    },
    {
      operation: "Bill Payment",
      description: "Electricity bill paid successfully.",
      image: "https://via.placeholder.com/300x200?text=Bill+Payment"
    }
  ];
  

  constructor(private dataService: OperationsService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getAll().subscribe({
      next: (response: any) => {
        this.items = response;
      },
      error: (err: any) => {
        console.error('Error fetching data:', err);
      }
    });
  }

  handleItemClick(item: any) {
    Swal.fire({
      title: '¿Deseas preguntar por este servicio?',
      text: `Servicio: ${item.operation}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, preguntar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const phoneNumber = '573001234567'; // Reemplaza con tu número de WhatsApp
        const message = `Hola, estoy interesado en el servicio "${item.operation}". ¿Podrían darme más información?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }
    });
  }

}

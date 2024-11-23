import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Monitor DH5 Model 2539-1068',
      description: `The "Monitor DH5 Model 2539-1068" appears to refer to an LCD display screen used in heavy machinery, specifically for models such as the Daewoo Doosan DH220-5 and DH220-V excavators.`,
      image: 'https://via.placeholder.com/256x320'
    },
    {
      id: 2,
      name: 'Monitor DH5 Model 2539-1068',
      description: `The "Monitor DH5 Model 2539-1068" appears to refer to an LCD display screen used in heavy machinery, specifically for models such as the Daewoo Doosan DH220-5 and DH220-V excavators.`,
      image: 'https://via.placeholder.com/256x320'
    },
    {
      id: 3,
      name: 'Monitor DH5 Model 2539-1068',
      description: `The "Monitor DH5 Model 2539-1068" appears to refer to an LCD display screen used in heavy machinery, specifically for models such as the Daewoo Doosan DH220-5 and DH220-V excavators.`,
      image: 'https://via.placeholder.com/256x320'
    },
    {
      id: 4,
      name: 'Monitor DH5 Model 2539-1068',
      description: `The "Monitor DH5 Model 2539-1068" appears to refer to an LCD display screen used in heavy machinery, specifically for models such as the Daewoo Doosan DH220-5 and DH220-V excavators.`,
      image: 'https://via.placeholder.com/256x320'
    },
    {
      id: 5,
      name: 'Monitor DH5 Model 2539-1068',
      description: `The "Monitor DH5 Model 2539-1068" appears to refer to an LCD display screen used in heavy machinery, specifically for models such as the Daewoo Doosan DH220-5 and DH220-V excavators.`,
      image: 'https://via.placeholder.com/256x320'
    },
    {
      id: 6,
      name: 'Monitor DH5 Model 2539-1068',
      description: `The "Monitor DH5 Model 2539-1068" appears to refer to an LCD display screen used in heavy machinery, specifically for models such as the Daewoo Doosan DH220-5 and DH220-V excavators.`,
      image: 'https://via.placeholder.com/256x320'
    },
  ];
  

}

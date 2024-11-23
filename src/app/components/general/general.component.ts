import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {

  descriptionDiagnosis = "Vehicle diagnostics involve systematically inspecting and testing a car's systems to identify any faults or performance issues. This process includes connecting diagnostic tools to the vehicle's onboard computer to retrieve error codes, assessing engine performance, inspecting electrical and mechanical systems, and evaluating sensors and actuators. The goal is to pinpoint issues and recommend repairs or maintenance to ensure optimal vehicle functionality and safety."
  descriptionProgramming = "Programming a car's computer involves configuring or updating the vehicle's electronic control units (ECUs) to optimize performance, enable new features, or resolve issues. This process includes connecting specialized software to the vehicle's diagnostic port, uploading new firmware or software updates, and calibrating systems such as the engine, transmission, or safety modules. Programming ensures the car operates efficiently, complies with regulations, and integrates with modern technologies."
  descriptionMaintace = "Car maintenance involves performing routine checks and services to ensure the vehicle operates safely and efficiently. This includes inspecting and replacing essential components such as oil, filters, brakes, tires, and fluids. Maintenance also covers tasks like checking the battery, aligning the wheels, and monitoring the engine and transmission performance. Regular upkeep helps prevent breakdowns, extends the vehicle's lifespan, and maintains optimal performance."

  showModalDiagnosis = false;
  showModalProgramming = false;
  showModalMaintace = false;
}

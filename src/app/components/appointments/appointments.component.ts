import { Component, OnInit } from '@angular/core';
import staffList from '../../data/staffList'
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointMentsComponent implements OnInit {
  staffData: Array<any> = staffList;
  client: IClient = {}
  dateofBirth: Date;
  appointmentConfirmation = {
    client:{},
    staff:{},
    serviceLine: []
  }
  constructor() {

  }

  onSelectDateofBirth(dateofBirth) {
    console.log(dateofBirth)
    var ageDifMs = Date.now() - dateofBirth.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    this.client.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  checkForStaffSpeciality(staff) {
    if (this.client.age > 70) {
      return staff.speciality == 'Geriatrics'
    } else {
      return true
    }
  }

  createAppointment(form) {
    if (form.valid) {
      let fields = form.value;
      let startTime = form.value.startTime;
      let endTime = form.value.endTime;
      this.appointmentConfirmation['serviceLine'] = [];
      console.log('43', startTime, endTime)
      this.appointmentConfirmation.client['firstName'] = fields.firstName;
      this.appointmentConfirmation.client['lastName'] = fields.lastName;
      this.appointmentConfirmation.client['dateofBirth'] = fields.dateofBirth;
      this.appointmentConfirmation['staff'] = this.staffData.filter((staff) => {
        return staff.staffId === fields.doctor
      })[0];

      if(startTime.getDay() !== endTime.getDay()){
        let firstServiceLine = {}, secondServiceLine = {};
        firstServiceLine['startTime'] = fields.startTime;
        let serviceSplit = new Date(fields.startTime)
        firstServiceLine['endTime'] = new Date(serviceSplit.setHours(24, 0,0));
        this.appointmentConfirmation['serviceLine'].push(firstServiceLine);        
        secondServiceLine['startTime'] = new Date(serviceSplit.setHours(0,0,0));
        secondServiceLine['endTime'] = fields.endTime;
        this.appointmentConfirmation['serviceLine'].push(secondServiceLine);
      } else{
        let serviceLineObj = {}
        serviceLineObj['startTime'] = fields.startTime;
        serviceLineObj['endTime'] = fields.endTime;
        this.appointmentConfirmation['serviceLine'].push(serviceLineObj)
      }

      console.log('this.', this.appointmentConfirmation)
      
    }
  }

  ngOnInit() {

  }


}
export interface IClient {
  firstName?: string,
  lastName?: string,
  dateofBirth?: Date,
  startTime?: Date,
  endTime?: Date,
  age?: number
}

export default AppointMentsComponent
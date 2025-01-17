import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { message: string },
        public dialogRef: MatDialogRef<AlertComponent>,
    ) {}
}

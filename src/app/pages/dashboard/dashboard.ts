import { Component } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
    selector: 'app-dashboard',
    imports: [Card],
    template: `
        <div class="mb-4 p-8">
            <p-card header="Simple Card">
                <p class="m-0">
                    Este template perfectamente para ponerse en producción
                </p>
            </p-card>
        </div>
    `
})
export class Dashboard {}

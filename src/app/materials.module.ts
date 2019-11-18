import { NgModule } from '@angular/core';
import {
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    } from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule
    ],
    exports: [
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule
    ]
})

export class MaterialModule {}

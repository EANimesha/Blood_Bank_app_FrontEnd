import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule
    } from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

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
        MatRadioModule
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
        MatRadioModule
    ]
})

export class MaterialModule {}

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { PrincipalComponent } from './paginas/principal/principal.component';
import { AgregarPostLocalComponent } from './paginas/agregar-post-local/agregar-post-local.component';
import { AgregarPostRemotoComponent } from './paginas/agregar-post-remoto/agregar-post-remoto.component';

export const AppRoutes: Routes = [
	{ path: '', component: PrincipalComponent },
	{ path: 'add', component: AgregarPostLocalComponent },
	{ path: 'add-remoto', component: AgregarPostRemotoComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes); 
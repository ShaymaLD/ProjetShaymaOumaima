import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
{path:'accueil',title:'Accueil', component:AccueilComponent},
{path:'produits',title:'Produits', component:ProduitsComponent},
{path:'contact',title:'Contact', component:ContactComponent},
{path:'', redirectTo:'accueil', pathMatch:'full'},
{path:'**', title:'Erreur',component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

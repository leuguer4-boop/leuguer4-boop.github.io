import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import{ Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('contactForm') contactForm!: NgForm;
  submissionSuccess: boolean = false;
  submissionError: boolean = false;
  isLoading: boolean = false; // NOUVEAU: Pour l'état du bouton
  readonly maxMessageLength: number = 1000; // Augmentation pour plus de flexibilité

  constructor(private router:Router) { }

  onSubmit(form: NgForm) {
    this.submissionSuccess = false;
    this.submissionError = false;

    if (form.valid) {
      this.isLoading = true; // Début de l'état de chargement

      const data = form.value;

      // 1. Préparation des données pour l'envoi Email (Mailto: dynamique)
      // Utilisation d'encodeURIComponent pour garantir la compatibilité des caractères spéciaux
      const body = encodeURIComponent(`
        NOM & PRÉNOM: ${data.name}

        EMAIL DU CLIENT: ${data.email}

        SUJET: ${data.subject}


        --- MESSAGE DÉTAILLÉ ---

        ${data.message}
      `);

      // La chaîne d'emails contient vos deux adresses pour la redondance
      const recipients = 'rovanolleugue@yahoo.com,leuguer4@gmail.com';

      // Construction du lien mailto:
      const mailtoLink = `mailto:${recipients}?subject=NOUVELLE REQUÊTE: ${data.subject}&body=${body}`;

      // 2. Simulation de délai pour le chargement du bouton (2s)
      setTimeout(() => {
        this.isLoading = false; // Fin du chargement

        // 3. Déclenchement de l'ouverture du logiciel de messagerie
        window.location.href = mailtoLink;

        // 4. Affichage du message de succès
        this.submissionSuccess = true;
        
        // Réinitialisation du formulaire et du message
        setTimeout(() => {
          form.resetForm();
          this.submissionSuccess = false;
        }, 8000); // Laisser un peu plus de temps pour que l'utilisateur lise l'alerte

      }, 2000);

    } else {
      // Affichage immédiat des erreurs de validation
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      this.submissionError = true;
    }
  }
  
  /**
   * Fonction de contact direct réutilisable pour WhatsApp (pour la complétude)
   * @param number Le numéro de téléphone
   * @param message Le message initial
   */
  contactWhatsApp(number: string, message: string): void {
      const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
  }












viral(){
    
    alert("je m appel viral")

   }


    
    virus(){
    
    const tata=prompt("choisi blanc, bleu ou rouge");

    

   }


couleurChoisie: string | null=null;
 
message: string= "cliquez sur le bouton pour choisir une couleur";


     vrus(){
    
    const couleur=prompt("veullez choisir une couleur");

    if(couleur !== null && couleur.trim() !==''){

      this.couleurChoisie= couleur;

      this.message= "vous avez choisi:  "+ " "+couleur +". le fond de ce message est maintenant stylisé"
    }

      else{

        this.couleurChoisie=null;

        this.message= "Operation annulé ou auune couleur entréé, veuillez rééssayez"

      }

   }

   //iltons


couleurChoisi: string | null=null;
 
messag: string= "cliquez sur le bouton pour choisir une couleur";



    iltons(){
    
    const reponse=prompt("choisir blanch rouge ou noir");

 

    if( reponse=== "blanch"){

      this.couleurChoisi= reponse;

      this.messag= "vous avez choisi:  "+ " "+reponse +". le fond de ce message est maintenant stylisé"
    }

    else if( reponse=== "rouge"){

      this.couleurChoisi= reponse;

      this.messag= "vous avez choisi:  "+ " "+reponse +". le fond de ce message est maintenant stylisé"
    }

    else if( reponse=== "noir"){

      this.couleurChoisi= reponse;

      this.messag= "vous avez choisi:  "+ " "+reponse +". le fond de ce message est maintenant stylisé"
    }

      else{

        this.couleurChoisie=null;

        this.message= "Operation annulé ou auune couleur entréé, veuillez rééssayez"

      }

   }




   navigue(){

    this.router.navigate(['/blog']);

   }


  }
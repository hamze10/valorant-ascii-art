"use client";

import Header from "@/components/Header";
import React from "react";

const MentionsLegales = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col space-y-5">
                <h1>Mentions Légales</h1>

                <section>
                    <h2>Informations sur l&apos;Éditeur</h2>
                    <p>
                        Nom de l&apos;entreprise : Hamza M<br />
                        Adresse : 1080 Bruxelles, Belgique<br />
                        Téléphone : //<br />
                        Email : hamzamah1030@gmail.com<br />
                        Numéro de TVA : //
                    </p>
                </section>

                <section>
                    <h2>Hébergeur du Site</h2>
                    <p>
                        Hébergeur : Vercel.com<br />
                        Adresse : //<br />
                        Téléphone ://
                    </p>
                </section>

                <section>
                    <h2>Propriété Intellectuelle</h2>
                    <p>
                        Tous les contenus présents sur ce site (textes, images, logos, etc.) sont protégés par le droit d&apos;auteur. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable.
                    </p>
                </section>

                <section>
                    <h2>Responsabilité</h2>
                    <p>
                        L&apos;éditeur ne saurait être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site internet. Des espaces interactifs (possibilité de poser des questions dans l&apos;espace contact) sont à la disposition des utilisateurs. L&apos;éditeur se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en Belgique, en particulier les dispositions relatives à la protection des données.
                    </p>
                </section>

                <section>
                    <h2>Politique de Confidentialité</h2>
                    <p>
                        Pour plus d&apos;informations sur la manière dont nous traitons vos données personnelles, veuillez consulter notre <a href="/privacy-policy">Politique de Confidentialité</a>.
                    </p>
                </section>

                <section>
                    <h2>Utilisation des Cookies</h2>
                    <p>
                        Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et réaliser des statistiques de visites. Vous pouvez configurer votre navigateur pour refuser les cookies.
                    </p>
                </section>
            </div>

        </div>
    )
}

export default MentionsLegales;
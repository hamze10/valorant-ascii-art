"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import React from "react";

const MentionsLegales = () => {
    const router = useRouter();
    
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />
            <div className="flex flex-col items-center p-10">
                <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-5xl w-full">
                    <div className="text-center mb-12">
                        <h1 className="mb-8 text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Mentions Légales
                        </h1>
                        <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
                            Informations légales obligatoires concernant ValoAscii, conformément à la législation européenne et belge.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
                    </div>

                    <div className="space-y-8">
                        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">🏢</span>
                                <h2 className="text-3xl font-bold text-blue-800">Informations sur l&apos;Éditeur</h2>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-blue-800 mb-3">Identité de l&apos;Éditeur</h3>
                                        <ul className="text-blue-700 space-y-2">
                                            <li><strong>Nom :</strong> Hamza Mahmoudi</li>
                                            <li><strong>Statut :</strong> Développeur indépendant</li>
                                            <li><strong>Projet :</strong> ValoAscii</li>
                                            <li><strong>Type :</strong> Site web gratuit et éducatif</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-800 mb-3">Coordonnées</h3>
                                        <ul className="text-blue-700 space-y-2">
                                            <li><strong>Localisation :</strong> 1080 Bruxelles, Belgique</li>
                                            <li><strong>Email :</strong> 
                                                <a href="mailto:hamzamah1030@gmail.com" className="underline hover:text-blue-600 ml-1">
                                                    hamzamah1030@gmail.com
                                                </a>
                                            </li>
                                            <li><strong>Support :</strong> Par email uniquement</li>
                                            <li><strong>Horaires :</strong> Réponse sous 24-48h</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">🌐</span>
                                <h2 className="text-3xl font-bold text-green-800">Hébergement et Infrastructure</h2>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-green-800 mb-3">Hébergeur Principal</h3>
                                        <ul className="text-green-700 space-y-2">
                                            <li><strong>Société :</strong> Vercel Inc.</li>
                                            <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                                            <li><strong>Site web :</strong> 
                                                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600 ml-1">
                                                    vercel.com
                                                </a>
                                            </li>
                                            <li><strong>Type :</strong> Plateforme cloud sécurisée</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-green-800 mb-3">Services Tiers</h3>
                                        <ul className="text-green-700 space-y-2">
                                            <li><strong>Analytics :</strong> Google Analytics</li>
                                            <li><strong>Publicités :</strong> Google AdSense</li>
                                            <li><strong>CDN :</strong> Vercel Edge Network</li>
                                            <li><strong>Sécurité :</strong> HTTPS/SSL par défaut</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">©️</span>
                                <h2 className="text-3xl font-bold text-purple-800">Propriété Intellectuelle</h2>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-purple-800 mb-3">Droits d&apos;Auteur</h3>
                                        <p className="text-purple-700 leading-relaxed">
                                            L&apos;ensemble du site ValoAscii, incluant sa structure, son design, ses textes, ses images, et son code source, 
                                            est protégé par le droit d&apos;auteur. Toute reproduction, distribution, modification ou utilisation commerciale 
                                            sans autorisation écrite préalable est strictement interdite.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-purple-800 mb-3">Marques Tierces</h3>
                                        <p className="text-purple-700 leading-relaxed">
                                            VALORANT est une marque déposée de Riot Games, Inc. ValoAscii n&apos;est pas affilié, approuvé, 
                                            ou en aucune façon officiellement connecté avec Riot Games ou VALORANT. 
                                            L&apos;utilisation du nom &quot;VALORANT&quot; est uniquement à des fins descriptives.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-purple-800 mb-3">Contenu Utilisateur</h3>
                                        <p className="text-purple-700 leading-relaxed">
                                            Les créations ASCII réalisées par les utilisateurs leur appartiennent. 
                                            ValoAscii ne revendique aucun droit sur les œuvres créées via notre plateforme.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">⚖️</span>
                                <h2 className="text-3xl font-bold text-orange-800">Responsabilité et Limitations</h2>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-orange-800 mb-3">Limitation de Responsabilité</h3>
                                        <p className="text-orange-700 leading-relaxed">
                                            ValoAscii est fourni &quot;en l&apos;état&quot; sans garantie d&apos;aucune sorte. L&apos;éditeur ne saurait être tenu responsable 
                                            des dommages directs, indirects, consécutifs ou particuliers résultant de l&apos;utilisation ou de l&apos;impossibilité 
                                            d&apos;utiliser le service, y compris la perte de données ou les interruptions de service.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-orange-800 mb-3">Disponibilité du Service</h3>
                                        <p className="text-orange-700 leading-relaxed">
                                            Nous nous efforçons de maintenir le service disponible 24h/24 et 7j/7, mais nous ne garantissons pas 
                                            une disponibilité ininterrompue. Des maintenances programmées ou des interruptions techniques peuvent survenir.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-orange-800 mb-3">Modération du Contenu</h3>
                                        <p className="text-orange-700 leading-relaxed">
                                            Bien que ValoAscii stocke les créations localement sur votre appareil, nous nous réservons le droit 
                                            de refuser l&apos;accès au service en cas d&apos;utilisation abusive ou contraire à nos conditions d&apos;utilisation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">🔗</span>
                                <h2 className="text-3xl font-bold text-gray-800">Références Légales</h2>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-3">Politique de Confidentialité</h3>
                                        <p className="text-gray-700 mb-3">
                                            Pour des informations détaillées sur la collecte, l&apos;utilisation et la protection de vos données personnelles :
                                        </p>
                                        <button 
                                            onClick={() => router.push('/privacy-policy')} 
                                            className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg font-medium transition-colors"
                                        >
                                            📋 Consulter la Politique de Confidentialité
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-3">Contact et Support</h3>
                                        <p className="text-gray-700 mb-3">
                                            Pour toute question concernant ces mentions légales ou le fonctionnement du site :
                                        </p>
                                        <button 
                                            onClick={() => router.push('/contact')} 
                                            className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg font-medium transition-colors"
                                        >
                                            📞 Nous Contacter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">🍪</span>
                                <h2 className="text-3xl font-bold text-teal-800">Cookies et Technologies</h2>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-bold text-teal-800 mb-2">Types de Cookies Utilisés</h3>
                                        <ul className="text-teal-700 space-y-1">
                                            <li>• <strong>Cookies essentiels :</strong> Fonctionnement de base du site</li>
                                            <li>• <strong>Cookies analytics :</strong> Google Analytics pour les statistiques anonymes</li>
                                            <li>• <strong>Cookies publicitaires :</strong> Google AdSense pour l&apos;affichage d&apos;annonces</li>
                                            <li>• <strong>Stockage local :</strong> Sauvegarde de vos créations ASCII</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-teal-800 mb-2">Gestion des Cookies</h3>
                                        <p className="text-teal-700">
                                            Vous pouvez configurer votre navigateur pour accepter, refuser ou supprimer les cookies. 
                                            Notez que certaines fonctionnalités du site peuvent être limitées si vous désactivez les cookies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">📋</span>
                                <h2 className="text-3xl font-bold text-yellow-800">Dispositions Finales</h2>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-bold text-yellow-800 mb-2">Droit Applicable</h3>
                                        <p className="text-yellow-700">
                                            Ces mentions légales sont régies par le droit belge et européen. 
                                            En cas de litige, les tribunaux de Bruxelles, Belgique, seront seuls compétents.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-yellow-800 mb-2">Modifications</h3>
                                        <p className="text-yellow-700">
                                            Ces mentions légales peuvent être modifiées à tout moment. 
                                            Les utilisateurs seront informés des changements importants via le site web.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-yellow-800 mb-2">Validité</h3>
                                        <p className="text-yellow-700">
                                            Si une disposition de ces mentions légales était déclarée nulle ou inapplicable, 
                                            les autres dispositions demeureraient en vigueur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 bg-blue-100 border border-blue-200 rounded-2xl p-8 text-center">
                        <span className="text-4xl mb-4 block">⚖️</span>
                        <h3 className="text-2xl font-bold text-blue-800 mb-3">Conformité Légale</h3>
                        <p className="text-blue-800 mb-4">
                            Ces mentions légales sont conformes aux exigences du RGPD, de la directive e-Commerce européenne, 
                            et de la législation belge en matière de sites web.
                        </p>
                        <p className="text-blue-700 text-sm">
                            Pour toute question juridique, contactez-nous à hamzamah1030@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default MentionsLegales;
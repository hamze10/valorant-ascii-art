import Link from "next/link";

export const metadata = {
    title: 'Mentions Légales — ValoAscii',
    description: "Informations légales obligatoires concernant ValoAscii : éditeur, hébergement Vercel, propriété intellectuelle et responsabilité.",
};

const MentionsLegales = () => {
    return (
        <main className="flex flex-col min-h-screen bg-valo-dark text-valo-gray pb-12">
            <div className="bg-gray-900 border border-gray-800 p-8 sm:p-12 m-6 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-valorant-red transform translate-x-16 -translate-y-16 rotate-45 opacity-20"></div>
                
                <div className="text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 border-b border-gray-800 pb-6 inline-block">
                        MENTIONS <span className="text-valorant-red">LÉGALES</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Informations légales obligatoires concernant ValoAscii, conformément à la législation européenne et belge.
                    </p>
                    <p className="text-sm font-mono text-valorant-red mt-6">DERNIÈRE MISE À JOUR : {new Date().toLocaleDateString('fr-FR')}</p>
                </div>
            </div>

            <div className="flex flex-col items-center px-6">
                <div className="max-w-5xl w-full">
                    <div className="space-y-8">
                        
                        <section className="bg-gray-900 border border-gray-800 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-valorant-red"></div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-3xl">🏢</span>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-wide">Informations sur l&apos;Éditeur</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-white uppercase tracking-wide mb-3 text-sm text-valorant-red">Identité de l&apos;Éditeur</h3>
                                        <ul className="text-gray-400 text-sm space-y-3">
                                            <li><strong className="text-white">Nom :</strong> Hamza Mahmoudi</li>
                                            <li><strong className="text-white">Statut :</strong> Développeur indépendant</li>
                                            <li><strong className="text-white">Projet :</strong> ValoAscii</li>
                                            <li><strong className="text-white">Type :</strong> Site web gratuit et éducatif</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white uppercase tracking-wide mb-3 text-sm text-valorant-red">Coordonnées</h3>
                                        <ul className="text-gray-400 text-sm space-y-3">
                                            <li><strong className="text-white">Localisation :</strong> 1080 Bruxelles, Belgique</li>
                                            <li><strong className="text-white">Email :</strong> 
                                                <a href="mailto:hamzamah1030@gmail.com" className="text-valorant-red hover:text-white ml-2 transition-colors">
                                                    hamzamah1030@gmail.com
                                                </a>
                                            </li>
                                            <li><strong className="text-white">Support :</strong> Par email uniquement</li>
                                            <li><strong className="text-white">Horaires :</strong> Réponse sous 24-48h</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-900 border border-gray-800 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-valorant-red"></div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-3xl">🌐</span>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-wide">Hébergement et Infrastructure</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-white uppercase tracking-wide mb-3 text-sm text-valorant-red">Hébergeur Principal</h3>
                                        <ul className="text-gray-400 text-sm space-y-3">
                                            <li><strong className="text-white">Société :</strong> Vercel Inc.</li>
                                            <li><strong className="text-white">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                                            <li><strong className="text-white">Site web :</strong> 
                                                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-valorant-red hover:text-white ml-2 transition-colors">
                                                    vercel.com
                                                </a>
                                            </li>
                                            <li><strong className="text-white">Type :</strong> Plateforme cloud sécurisée</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white uppercase tracking-wide mb-3 text-sm text-valorant-red">Services Tiers</h3>
                                        <ul className="text-gray-400 text-sm space-y-3">
                                            <li><strong className="text-white">Analytics :</strong> Google Analytics</li>
                                            <li><strong className="text-white">Publicités :</strong> Google AdSense</li>
                                            <li><strong className="text-white">CDN :</strong> Vercel Edge Network</li>
                                            <li><strong className="text-white">Sécurité :</strong> HTTPS/SSL par défaut</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-900 border border-gray-800 p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl">©️</span>
                                <h2 className="text-2xl font-black text-white uppercase tracking-wide">Propriété Intellectuelle</h2>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-valorant-red uppercase tracking-wide mb-2 text-sm">Droits d&apos;Auteur</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        L&apos;ensemble du site ValoAscii, incluant sa structure, son design, ses textes, ses images, et son code source, 
                                        est protégé par le droit d&apos;auteur. Toute reproduction, distribution, modification ou utilisation commerciale 
                                        sans autorisation écrite préalable est strictement interdite.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-valorant-red uppercase tracking-wide mb-2 text-sm">Marques Tierces</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        VALORANT est une marque déposée de Riot Games, Inc. ValoAscii n&apos;est pas affilié, approuvé, 
                                        ou en aucune façon officiellement connecté avec Riot Games ou VALORANT. 
                                        L&apos;utilisation du nom &quot;VALORANT&quot; est uniquement à des fins descriptives.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-valorant-red uppercase tracking-wide mb-2 text-sm">Contenu Utilisateur</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Les créations ASCII réalisées par les utilisateurs leur appartiennent. 
                                        ValoAscii ne revendique aucun droit sur les œuvres créées via notre plateforme.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-900 border border-gray-800 p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl text-valorant-red">⚖️</span>
                                <h2 className="text-2xl font-black text-white uppercase tracking-wide">Responsabilité et Limitations</h2>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-valorant-red uppercase tracking-wide mb-2 text-sm">Limitation de Responsabilité</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        ValoAscii est fourni &quot;en l&apos;état&quot; sans garantie d&apos;aucune sorte. L&apos;éditeur ne saurait être tenu responsable 
                                        des dommages directs, indirects, consécutifs ou particuliers résultant de l&apos;utilisation ou de l&apos;impossibilité 
                                        d&apos;utiliser le service.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-valorant-red uppercase tracking-wide mb-2 text-sm">Disponibilité</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Nous nous efforçons de maintenir le service disponible 24h/24, mais ne garantissons pas une disponibilité ininterrompue.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-valorant-red uppercase tracking-wide mb-2 text-sm">Modération</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Nous nous réservons le droit de refuser l&apos;accès au service en cas d&apos;utilisation abusive ou contraire à nos conditions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-900 border border-gray-800 p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-2xl">🔗</span>
                                        <h2 className="text-xl font-black text-white uppercase tracking-wide">Références Légales</h2>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-gray-400 text-sm mb-3">Pour des informations détaillées sur la protection des données :</p>
                                            <Link href="/privacy-policy" className="inline-block bg-white text-valo-dark hover:bg-gray-200 uppercase tracking-widest font-black text-xs px-4 py-3 transition-colors w-full sm:w-auto">
                                                📋 POLITIQUE DE CONFIDENTIALITÉ
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-2xl">🍪</span>
                                        <h2 className="text-xl font-black text-white uppercase tracking-wide">Technologies</h2>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-400">
                                        <p><strong className="text-white">Fonctionnement :</strong> Stockage local essentiel</p>
                                        <p><strong className="text-white">Analytics :</strong> Google Analytics (anonyme)</p>
                                        <p><strong className="text-white">Publicités :</strong> Google AdSense (cookies tiers)</p>
                                        <p className="mt-2 text-xs text-gray-500 italic">Configurez votre navigateur pour gérer ces cookies.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-900 border border-gray-800 p-8 border-b-4 border-b-valorant-red">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl text-valorant-red">📋</span>
                                <h2 className="text-2xl font-black text-white uppercase tracking-wide">Dispositions Finales</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
                                <div>
                                    <h3 className="font-bold text-white uppercase tracking-wide mb-2 text-xs">Droit Applicable</h3>
                                    <p>Ces mentions légales sont régies par le droit belge et européen. En cas de litige, les tribunaux de Bruxelles sont compétents.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white uppercase tracking-wide mb-2 text-xs">Modifications</h3>
                                    <p>Ces mentions peuvent être modifiées à tout moment sans préavis. Les utilisateurs seront informés via le site web.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white uppercase tracking-wide mb-2 text-xs">Validité</h3>
                                    <p>Si une disposition était déclarée nulle ou inapplicable, les autres dispositions demeureraient en vigueur.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 bg-gray-900 border border-gray-800 p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative">
                        <div className="absolute inset-0 bg-valo-dark opacity-80 z-0"></div>
                        <div className="relative z-10">
                            <span className="text-4xl mb-4 block text-valorant-red">⚖️</span>
                            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3">Conformité Légale</h3>
                            <p className="text-gray-400 text-sm mb-4 max-w-2xl mx-auto">
                                Ces mentions légales sont conformes aux exigences du RGPD, de la directive e-Commerce européenne, 
                                et de la législation belge en matière de sites web.
                            </p>
                            <p className="text-valorant-red text-xs uppercase tracking-widest font-bold">
                                Contact : hamzamah1030@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MentionsLegales;
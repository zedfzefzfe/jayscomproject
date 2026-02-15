export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Phosphor icon class name (e.g., "ph-lightbulb")
  color: string; // Hex code for glow effects
  image: string; // URL for the main image
  features: string[]; // List of features for the detail page
}

export const services: Service[] = [
  {
    id: "enseignes-lumineuses",
    title: "Enseignes Lumineuses",
    shortDescription: "Caissons lumineux, lettres rétro-éclairées et solutions LED haute performance pour une visibilité maximale.",
    fullDescription: "Nos enseignes lumineuses sont conçues pour captiver l'attention de jour comme de nuit. Nous utilisons des technologies LED de pointe pour garantir une luminosité optimale tout en réduisant la consommation énergétique.",
    icon: "ph-lightbulb",
    color: "#0d9488",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-SZGLQwdxd36bPSfRLwkRfcHh6VqCFY.png",
    features: [
      "Visibilité 24/7",
      "Éclairage LED basse consommation",
      "Durabilité et résistance aux intempéries",
      "Design personnalisé sur mesure"
    ]
  },
  {
    id: "lettrage-3d",
    title: "Lettrage 3D & Logos",
    shortDescription: "PVC, Inox, Plexiglas — un effet premium garanti.",
    fullDescription: "Donnez du relief à votre marque avec nos lettres en relief 3D. Disponibles en divers matériaux tels que l'inox, le PVC ou le plexiglas, elles apportent une touche d'élégance et de professionnalisme à votre façade ou intérieur.",
    icon: "ph-cube",
    color: "#14b8a6",
    image: "https://placehold.co/600x400/334155/ffffff?text=Lettrage+3D",
    features: [
      "Finitions variées (brossé, miroir, laqué)",
      "Installation sur entretoises pour effet flottant",
      "Matériaux durables (Inox 316, Plexiglass)",
      "Découpe numérique de haute précision"
    ]
  },
  {
    id: "habillage-facade",
    title: "Habillage Façade (Alucobond)",
    shortDescription: "Alucobond et revêtements pour une façade moderne.",
    fullDescription: "Transformez radicalement l'apparence de votre bâtiment avec nos solutions d'habillage en composite aluminium (Alucobond). Une solution esthétique, durable et isolante qui modernise instantanément votre image.",
    icon: "ph-buildings",
    color: "#f59e0b",
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Habillage+Alucobond",
    features: [
      "Large choix de couleurs et textures (bois, métal)",
      "Résistance aux UV et à la corrosion",
      "Isolation thermique et phonique améliorée",
      "Garantie longue durée"
    ]
  },
  {
    id: "impression-numerique",
    title: "Impression Numérique",
    shortDescription: "Vinyle, bâches et stickers grand format HD.",
    fullDescription: "Communiquez en grand avec nos impressions numériques haute définition. Du vinyle adhésif pour vitrines aux bâches géantes, nous imprimons sur tous supports avec une qualité d'image exceptionnelle.",
    icon: "ph-printer",
    color: "#06b6d4",
    image: "https://placehold.co/600x400/475569/ffffff?text=Impression+Numerique",
    features: [
      "Qualité HD Grand Format",
      "Vinyle, Bâche, Microperforé (One Way)",
      "Décoration murale et vitrophanie",
      "Encres résistantes aux UV"
    ]
  },
  {
    id: "neon-flex",
    title: "Néon Flex LED",
    shortDescription: "L'esthétique du néon vintage avec la modernité du LED.",
    fullDescription: "Retrouvez le charme du néon traditionnel sans ses inconvénients. Le Néon Flex LED est incassable, éco-énergétique et offre une liberté créative totale pour des designs uniques et colorés.",
    icon: "ph-lightning",
    color: "#ec4899",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/atelier-LoS1lD9ap5kWENkt9LDejl9h4evBCL.png",
    features: [
      "Effet néon authentique",
      "Flexible et incassable",
      "Consommation réduite",
      "Couleurs vibrantes et animations possibles"
    ]
  },
  {
    id: "totem-signaletique",
    title: "Totem & Signalétique",
    shortDescription: "Totems, plaques et signalisation directionnelle.",
    fullDescription: "Guidez vos clients efficacement avec notre gamme de signalétique intérieure et extérieure. Des totems monumentaux aux plaques de porte élégantes, chaque élément est conçu pour informer et orienter avec style.",
    icon: "ph-signpost",
    color: "#8b5cf6",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=Signaletique",
    features: [
      "Totems lumineux ou non-lumineux",
      "Signalétique directionnelle et de sécurité",
      "Plaques professionnelles gravées",
      "Marquage au sol et vitrophanie"
    ]
  }
];

export const Productos = [
  {
    id: 1,
    precio: 299900,
    nombre: 'Heladera Gafa HGF-357 No Frost 324L Blanca',
    stock: 15,
    intereses: false,
    cuotas: 12,
    descripcion: 'La Heladera Gafa HGF-357 No Frost combina tecnología avanzada con un diseño elegante. Su sistema No Frost evita la formación de escarcha, manteniendo tus alimentos frescos por más tiempo. Con 324 litros de capacidad, es perfecta para familias medianas. Incluye cajones transparentes para frutas y verduras con control de humedad, estantes ajustables de vidrio templado y un sistema de enfriamiento uniforme que garantiza la conservación óptima de todos tus alimentos.',
    principalDescripcion: 'Heladera No Frost de 324L con tecnología avanzada de conservación',
    propiedades: 'Características técnicas:<br>● Capacidad total: 324 litros<br>● Sistema: No Frost<br>● Freezer: 85 litros<br>● Refrigerador: 239 litros<br>● Eficiencia energética: A+<br>● Consumo: 35 kWh/mes<br>● Dimensiones: 176 x 59 x 64 cm<br>● Color: Blanco<br>● Garantía: 12 meses',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Alta Gama"],
    marca: 'Gafa',
    modelo: 'HGF-357',
    color: ['Blanco'],
    peso: [65, 'kg'],
    tamaño: ['cm', 176, 59, 64],
    material: 'Acero inoxidable y plástico ABS',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Excelente relación precio-calidad',
        usuarioID: 1001,
        reseña: 'La compré hace 6 meses y funciona perfecto. El sistema No Frost es genial, ya no tengo que descongelar. Muy espaciosa para mi familia de 4.'
      },
      {
        estrellas: 4,
        titulo: 'Buena heladera, algo ruidosa',
        usuarioID: 1002,
        reseña: 'En general muy conforme. Solo le resto una estrella porque hace un poco de ruido cuando arranca el compresor, pero nada grave.'
      }
    ]
  },
  {
    id: 2,
    precio: 189900,
    nombre: 'Lavarropas Drean Next 8.05 Eco 8kg Carga Frontal',
    stock: 8,
    intereses: true,
    cuotas: 18,
    descripcion: 'El Lavarropas Drean Next 8.05 Eco está diseñado para brindarte eficiencia, practicidad y un lavado superior en cada uso. Su capacidad de 8 kilos lo hace ideal para familias medianas, y gracias a su clasificación energética A+++, cuida tanto el ambiente como tu factura de luz. Con un moderno display LED táctil, podrás elegir entre 15 programas de lavado según tus necesidades: desde ciclos rápidos hasta opciones delicadas y antialérgicas. Además, cuenta con funciones inteligentes como inicio diferido y bloqueo infantil, para que tengas el control total del lavado en cualquier momento del día.',
    principalDescripcion: 'Lavarropas automático 8kg con 15 programas y eficiencia A+++',
    propiedades: 'Características técnicas:<br>● Capacidad de lavado: 8 kg<br>● Tipo de carga: Frontal<br>● Velocidad de centrifugado: 1200 RPM<br>● Programas de lavado: 15 (Rápido, Eco, Ropa delicada, Lana, Antialérgico, etc.)<br>● Tecnología de lavado: EcoWash con control automático de agua<br>● Nivel de ruido: 59 dB (lavado) / 76 dB (centrifugado)<br>● Eficiencia energética: A+++<br>● Funciones especiales: Bloqueo infantil, inicio diferido (hasta 24 hs), protección contra sobrecarga<br>● Pantalla: Display LED táctil',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Economico","Limpieza", "Calidad Precio"],
    marca: 'Drean',
    modelo: 'Next 8.05 Eco',
    color: ['Blanco'],
    peso: [68, 'kg'],
    tamaño: ['cm', 85, 60, 58],
    material: 'Acero esmaltado y plástico',

    reseñas: [
      {
        estrellas: 5,
        titulo: 'Excelente lavarropas!',
        usuarioID: 1003,
        reseña: 'Lo uso hace un año y estoy súper conforme. Lava muy bien, es silencioso y los programas son variados. El centrifugado deja la ropa casi seca.'
      },
      {
        estrellas: 4.5,
        titulo: 'Muy buena compra',
        usuarioID: 1004,
        reseña: 'Excelente relación precio-calidad. La pantalla táctil es muy intuitiva y el programa rápido de 30 min es perfecto para el día a día.'
      }
    ]
  },
  {
    id: 3,
    precio: 79900,
    nombre: 'Microondas BGH Quick Chef B223D 23L Digital',
    stock: 25,
    intereses: false,
    cuotas: 6,
    descripcion: 'El Microondas BGH Quick Chef B223D ofrece practicidad y versatilidad en tu cocina. Con 23 litros de capacidad y 800W de potencia, es perfecto para calentar, descongelar y cocinar. Su panel digital con 8 niveles de potencia te permite ajustar la cocción según tus necesidades.',
    principalDescripcion: 'Microondas digital 23L con 8 niveles de potencia',
    propiedades: '● Capacidad: 23 litros<br>● Potencia: 800W<br>● Panel: Digital<br>● Niveles de potencia: 8<br>● Plato giratorio: 27 cm<br>● Timer: 95 minutos<br>● Dimensiones: 46 x 35 x 27 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Calidad Precio"],
    marca: 'BGH',
    modelo: 'Quick Chef B223D',
    color: ['Negro'],
    peso: [12, 'kg'],
    tamaño: ['cm', 46, 35, 27],
    material: 'Acero inoxidable interior',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Cumple su función',
        usuarioID: 1005,
        reseña: 'Buen microondas para uso básico. Calienta bien y el tamaño es adecuado. El panel digital es fácil de usar.'
      }
    ]
  },
  {
    id: 4,
    precio: 459900,
    nombre: 'Aire Acondicionado Split Surrey 3200W Frío/Calor Inverter',
    stock: 12,
    intereses: true,
    cuotas: 24,
    descripcion: 'El Aire Acondicionado Surrey Split Inverter 3200W combina eficiencia energética con máximo confort. Su tecnología inverter ajusta automáticamente la potencia según la temperatura deseada, logrando un ahorro energético de hasta 60%. Incluye función frío/calor, control remoto con display LCD y filtros antibacteriales. Su diseño moderno se adapta a cualquier ambiente y su funcionamiento silencioso garantiza tu descanso.',
    principalDescripcion: 'Aire acondicionado inverter 3200W frío/calor con alta eficiencia',
    propiedades: 'Especificaciones:<br>● Capacidad: 3200W (2750 kcal/h)<br>● Tecnología: Inverter<br>● Funciones: Frío/Calor<br>● Eficiencia energética: A<br>● Refrigerante: R32 ecológico<br>● Nivel sonoro: 19 dB (interior)<br>● Control remoto: Con display LCD<br>● Filtros: Antibacterial y desodorizante<br>● Cobertura: Hasta 35 m²<br>● Garantía: 2 años',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Calefaccion","Bienestar","Confort"],
    marca: 'Surrey',
    modelo: '553AIQ1201E',
    color: ['Blanco'],
    peso: [45, 'kg'],
    tamaño: ['cm', 87, 30, 22],
    material: 'Plástico ABS y metal',
    reseñas: [
      {
        estrellas: 5,
        titulo: 'Excelente aire, muy silencioso',
        usuarioID: 1006,
        reseña: 'Lo instalé en el dormitorio y es increíblemente silencioso. Enfría súper rápido y el consumo bajo se nota en la factura de luz.'
      },
      {
        estrellas: 4.5,
        titulo: 'Muy buen producto',
        usuarioID: 1007,
        reseña: 'Funcionamiento perfecto tanto en frío como en calor. El control es intuitivo y la instalación fue sencilla.'
      }
    ]
  },
  {
    id: 5,
    precio: 34900,
    nombre: 'Licuadora Philips Daily HR2105 1.25L 400W',
    stock: 30,
    intereses: false,
    cuotas: 3,
    descripcion: 'La Licuadora Philips Daily HR2105 es perfecta para preparaciones diarias. Con motor de 400W y jarra de 1.25L, tiene la potencia y capacidad ideal para smoothies, jugos y salsas.',
    principalDescripcion: 'Licuadora 400W con jarra de 1.25L para uso diario',
    propiedades: '● Potencia: 400W<br>● Capacidad: 1.25L<br>● Velocidades: 2 + pulso<br>● Cuchillas: Acero inoxidable<br>● Jarra: Plástico libre de BPA',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina", "Economico","Confort"],
    marca: 'Philips',
    modelo: 'Daily HR2105',
    color: ['Blanco', 'Verde'],
    peso: [2.1, 'kg'],
    tamaño: ['cm', 35, 18, 18],
    material: 'Plástico libre de BPA',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Buena para uso básico',
        usuarioID: 1008,
        reseña: 'Perfecta para smoothies matutinos. Es compacta y fácil de limpiar.'
      }
    ]
  },
  {
    id: 6,
    precio: 149900,
    nombre: 'Lavavajillas Drean Dish 12.1 Blanco 12 Cubiertos',
    stock: 6,
    intereses: true,
    cuotas: 12,
    descripcion: 'El Lavavajillas Drean Dish 12.1 ofrece comodidad y eficiencia en el lavado de vajilla. Con capacidad para 12 cubiertos y 6 programas de lavado, se adapta a diferentes tipos de suciedad. Su clasificación energética A+ garantiza bajo consumo mientras que su sistema de secado por condensación deja la vajilla perfectamente seca y lista para usar.',
    principalDescripcion: 'Lavavajillas 12 cubiertos con 6 programas y eficiencia A+',
    propiedades: '● Capacidad: 12 cubiertos<br>● Programas: 6 (Intensivo, Normal, Eco, Rápido, Delicado, Prelavado)<br>● Eficiencia energética: A+<br>● Secado: Por condensación<br>● Nivel sonoro: 49 dB<br>● Display: LED<br>● Dimensiones: 84.5 x 59.8 x 57 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Limpieza","Prestigioso", "Confort"],
    marca: 'Drean',
    modelo: 'Dish 12.1',
    color: ['Blanco'],
    peso: [43, 'kg'],
    tamaño: ['cm', 84.5, 59.8, 57],
    material: 'Acero inoxidable interior',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Cambió mi rutina de cocina',
        usuarioID: 1009,
        reseña: 'Increíble la diferencia que hace. Lava súper bien y es bastante silencioso. El programa eco es el que más uso.'
      }
    ]
  },
  {
    id: 7,
    precio: 89900,
    nombre: 'Secarropas Drean Gold Blue 6.07 6kg',
    stock: 10,
    intereses: false,
    cuotas: 9,
    descripcion: 'El Secarropas Drean Gold Blue 6.07 es la solución perfecta para el secado eficiente de tu ropa. Con 6kg de capacidad y tecnología de condensación, no requiere instalación de caño de salida. Sus múltiples programas automáticos se adaptan a diferentes tipos de tela.',
    principalDescripcion: 'Secarropas por condensación 6kg con programas automáticos',
    propiedades: '● Capacidad: 6 kg<br>● Tipo: Condensación<br>● Programas: 15 automáticos<br>● Sensor de humedad<br>● Filtro anti-pelusas<br>● Dimensiones: 84 x 59.5 x 65 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Limpieza","Calidad Precio"],
    marca: 'Drean',
    modelo: 'Gold Blue 6.07',
    color: ['Blanco'],
    peso: [42, 'kg'],
    tamaño: ['cm', 84, 59.5, 65],
    material: 'Acero esmaltado',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Muy práctico',
        usuarioID: 1010,
        reseña: 'Perfecto para días de lluvia o cuando necesito la ropa rápido. El sensor funciona muy bien.'
      }
    ]
  },
  {
    id: 8,
    precio: 124900,
    nombre: 'Cocina Domec CXUPV 4 Hornallas a Gas con Horno',
    stock: 7,
    intereses: true,
    cuotas: 15,
    descripcion: 'La Cocina Domec CXUPV combina funcionalidad y diseño en un electrodoméstico esencial para tu hogar. Con 4 hornallas a gas y horno multigas, ofrece versatilidad total en la cocción. Su encendido electrónico en hornallas facilita el uso diario, mientras que el horno de 54 litros permite preparar desde pizzas hasta asados para toda la familia.',
    principalDescripcion: 'Cocina 4 hornallas a gas con horno multigas de 54L',
    propiedades: '● Hornallas: 4 a gas con encendido electrónico<br>● Horno: 54 litros multigas<br>● Parrillas: Hierro fundido<br>● Puerta: Vidrio templado con doble vidrio<br>● Timer: Analógico<br>● Cajón: Guardaplatos<br>● Dimensiones: 85 x 55 x 55 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina"," Alta Gama","Economico", "Calefaccion"],
    marca: 'Domec',
    modelo: 'CXUPV',
    color: ['Blanco'],
    peso: [52, 'kg'],
    tamaño: ['cm', 85, 55, 55],
    material: 'Acero esmaltado',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Excelente cocina familiar',
        usuarioID: 1011,
        reseña: 'Muy buena cocina, el horno calienta parejo y las hornallas tienen buen poder de fuego. Recomendable.'
      }
    ]
  },
  {
    id: 9,
    precio: 45900,
    nombre: 'Cafetera Express Philips HD8651 15 Bar',
    stock: 18,
    intereses: false,
    cuotas: 6,
    descripcion: 'La Cafetera Express Philips HD8651 te permite disfrutar de un café perfecto en casa. Con 15 bares de presión y sistema de calentamiento rápido, extrae todo el aroma y sabor del café. Incluye espumador de leche integrado para preparar cappuccinos y lattes como un barista profesional.',
    principalDescripcion: 'Cafetera express 15 bar con espumador integrado',
    propiedades: '● Presión: 15 bares<br>● Calentamiento: Rápido en 60 segundos<br>● Espumador: Leche integrado<br>● Portafiltros: Crema Plus<br>● Bandeja: Extraíble<br>● Depósito: 1.25L removible',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina", "Alta Gama"],
    marca: 'Philips',
    modelo: 'HD8651',
    color: ['Negro', 'Plateado'],
    peso: [4.2, 'kg'],
    tamaño: ['cm', 37, 24, 31],
    material: 'Plástico ABS y acero',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Café como en cafetería',
        usuarioID: 1012,
        reseña: 'Hace un café excelente, la crema queda perfecta. El espumador funciona muy bien para los cappuccinos.'
      }
    ]
  },
  {
    id: 10,
    precio: 67900,
    nombre: 'Aspiradora Electrolux Flex FLXS08 1400W Sin Bolsa',
    stock: 14,
    intereses: false,
    cuotas: 8,
    descripcion: 'La Aspiradora Electrolux Flex FLXS08 ofrece potencia y versatilidad sin la necesidad de bolsas. Su motor de 1400W garantiza una succión eficiente, mientras que su sistema ciclónico separa el polvo del aire. Incluye múltiples accesorios para limpiar desde alfombras hasta rincones difíciles.',
    principalDescripcion: 'Aspiradora sin bolsa 1400W con sistema ciclónico',
    propiedades: '● Potencia: 1400W<br>● Sistema: Ciclónico sin bolsa<br>● Capacidad depósito: 2L<br>● Filtro: HEPA lavable<br>● Cable: 5 metros<br>● Accesorios: 4 incluidos<br>● Peso: 6.5 kg',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Limpieza"],
    marca: 'Electrolux',
    modelo: 'Flex FLXS08',
    color: ['Azul', 'Gris'],
    peso: [6.5, 'kg'],
    tamaño: ['cm', 42, 28, 25],
    material: 'Plástico ABS',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Buena succión',
        usuarioID: 1013,
        reseña: 'Aspira muy bien y al no usar bolsas es más económica a largo plazo. Un poco ruidosa pero eficiente.'
      }
    ]
  },
  {
    id: 11,
    precio: 28900,
    nombre: 'Plancha a Vapor Black+Decker X1050 Antiadherente',
    stock: 22,
    intereses: false,
    cuotas: 3,
    descripcion: 'La Plancha Black+Decker X1050 hace que planchar sea más fácil y eficiente. Su suela antiadherente se desliza suavemente sobre cualquier tela, mientras que el sistema de vapor elimina las arrugas más difíciles.',
    principalDescripcion: 'Plancha a vapor con suela antiadherente y vapor vertical',
    propiedades: '● Potencia: 1200W<br>● Suela: Antiadherente<br>● Vapor: Vertical y horizontal<br>● Tanque: 180ml<br>● Goteo: Sistema antigoteo<br>● Cable: 1.8m giratorio',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Limpieza","Economico","Confort"],
    marca: 'Black+Decker',
    modelo: 'X1050',
    color: ['Azul', 'Blanco'],
    peso: [1.2, 'kg'],
    tamaño: ['cm', 28, 12, 15],
    material: 'Plástico y acero',
    reseñas: [
      {
        estrellas: 3.5,
        titulo: 'Cumple su función',
        usuarioID: 1014,
        reseña: 'Plancha decente para uso básico. Se calienta rápido y el vapor ayuda bastante.'
      }
    ]
  },
  {
    id: 12,
    precio: 189900,
    nombre: 'Freezer Horizontal Gafa HGF H400AB 400L',
    stock: 5,
    intereses: true,
    cuotas: 18,
    descripcion: 'El Freezer Horizontal Gafa HGF H400AB es ideal para conservar grandes cantidades de alimentos. Con 400 litros de capacidad y sistema de congelación rápida, mantiene tus productos en óptimas condiciones. Su diseño horizontal aprovecha mejor el espacio y facilita la organización de los alimentos.',
    principalDescripcion: 'Freezer horizontal 400L con congelación rápida',
    propiedades: '● Capacidad: 400 litros<br>● Tipo: Horizontal<br>● Congelación: Rápida<br>● Eficiencia: A+<br>● Canastas: 3 incluidas<br>● Lock: Con llave de seguridad<br>● Dimensiones: 86 x 141 x 72 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Economico","Calidad Precio"],
    marca: 'Gafa',
    categorias:[],
    modelo: 'HGF H400AB',
    color: ['Blanco'],
    peso: [85, 'kg'],
    tamaño: ['cm', 86, 141, 72],
    material: 'Acero esmaltado',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Perfecto para comercio',
        usuarioID: 1015,
        reseña: 'Lo uso en mi negocio y funciona perfecto. Mantiene muy bien la temperatura y es súper espacioso.'
      }
    ]
  },
  {
    id: 13,
    precio: 54900,
    nombre: 'Procesadora Philips Daily HR7320 700W',
    stock: 16,
    intereses: false,
    cuotas: 6,
    descripcion: 'La Procesadora Philips Daily HR7320 es tu aliada en la cocina para picar, rebanar, rallar y amasar. Con motor de 700W y múltiples accesorios, prepara desde salsas hasta masas en segundos. Su diseño compacto no ocupa mucho espacio pero ofrece gran versatilidad.',
    principalDescripcion: 'Procesadora 700W con múltiples funciones y accesorios',
    propiedades: '● Potencia: 700W<br>● Bowl: 2.1L libre de BPA<br>● Velocidades: 2 + pulso<br>● Accesorios: 5 discos incluidos<br>● Funciones: Picar, rebanar, rallar, amasar<br>● Almacenamiento: Integrado de accesorios',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina"],
    marca: 'Philips',
    modelo: 'Daily HR7320',
    color: ['Blanco'],
    peso: [4.3, 'kg'],
    tamaño: ['cm', 35, 24, 24],
    material: 'Plástico libre de BPA',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Muy versátil',
        usuarioID: 1016,
        reseña: 'Me encanta para preparar todo tipo de comidas. Los discos cortan perfecto y es fácil de armar.'
      }
    ]
  },
  {
    id: 14,
    precio: 73900,
    nombre: 'Ventilador de Techo Liliana VT3256 Blanco 3 Palas',
    stock: 11,
    intereses: false,
    cuotas: 9,
    descripcion: 'El Ventilador de Techo Liliana VT3256 combina funcionalidad con diseño elegante. Sus 3 palas optimizadas generan un flujo de aire eficiente y silencioso. Con 3 velocidades y rotación reversible, es perfecto para cualquier estación del año.',
    principalDescripcion: 'Ventilador de techo 3 palas con rotación reversible',
    propiedades: '● Palas: 3 de 132 cm<br>● Velocidades: 3<br>● Motor: Silencioso<br>● Rotación: Reversible<br>● Control: Cadena<br>● Iluminación: No incluida<br>● Garantía: 12 meses',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Confort"],
    marca: 'Liliana',
    modelo: 'VT3256',
    color: ['Blanco'],
    peso: [8.5, 'kg'],
    tamaño: ['cm', 42, 132, 132],
    material: 'Metal y MDF',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Buen ventilador',
        usuarioID: 1017,
        reseña: 'Funciona bien y es silencioso. La instalación fue sencilla siguiendo las instrucciones.'
      }
    ]
  },
  {
    id: 15,
    precio: 38900,
    nombre: 'Batidora de Pie Philips HR3740 300W',
    stock: 19,
    intereses: false,
    cuotas: 4,
    descripcion: 'La Batidora de Pie Philips HR3740 es perfecta para repostería y preparaciones que requieren batido constante. Con 5 velocidades y bowl de acero inoxidable de 3.5L, permite preparar desde merengues hasta masas pesadas sin esfuerzo.',
    principalDescripcion: 'Batidora de pie 300W con bowl de acero de 3.5L',
    propiedades: '● Potencia: 300W<br>● Capacidad bowl: 3.5L acero inoxidable<br>● Velocidades: 5<br>● Accesorios: Batidor, gancho amasador, pala<br>● Base: Antideslizante<br>● Bloqueo: Sistema de seguridad',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Economico"],
    marca: 'Philips',
    modelo: 'HR3740',
    color: ['Blanco', 'Rojo'],
    peso: [4.8, 'kg'],
    tamaño: ['cm', 38, 22, 35],
    material: 'Plástico ABS y acero inoxidable',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Perfecta para repostería',
        usuarioID: 1018,
        reseña: 'La uso para hacer tortas y funciona increíble. El bowl de acero es muy práctico y los accesorios de buena calidad.'
      }
    ]
  },
  {
    id: 16,
    precio: 156900,
    nombre: 'Purificador de Agua PSA Bajo Mesada 3 Etapas',
    stock: 9,
    intereses: true,
    cuotas: 12,
    descripcion: 'El Purificador de Agua PSA de 3 etapas garantiza agua pura y segura para tu familia. Su sistema de filtración avanzado elimina cloro, sedimentos, mal sabor y olor. Fácil instalación bajo mesada con canilla independiente incluida.',
    principalDescripcion: 'Purificador bajo mesada con sistema de 3 etapas de filtración',
    propiedades: '● Etapas: 3 de filtración<br>● Capacidad: 2000 litros por cartucho<br>● Instalación: Bajo mesada<br>● Canilla: Independiente incluida<br>● Filtros: Sedimentos, carbón activado, bloque carbón<br>● Conexión: 1/2 pulgada<br>● Garantía: 12 meses',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Bienestar","Confort","Cocina"],
    marca: 'PSA',
    modelo: '3 Etapas',
    color: ['Blanco'],
    peso: [3.2, 'kg'],
    tamaño: ['cm', 35, 15, 40],
    material: 'Plástico alimentario',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Excelente calidad de agua',
        usuarioID: 1019,
        reseña: 'Notamos inmediatamente la diferencia en el sabor del agua. Instalación sencilla y funciona perfecto.'
      },
      {
        estrellas: 4,
        titulo: 'Muy conforme',
        usuarioID: 1020,
        reseña: 'Buena relación precio-calidad. El agua sale sin gusto a cloro y los filtros duran bastante.'
      }
    ]
  },
  {
    id: 17,
    precio: 42900,
    nombre: 'Tostadora Philips Daily HD2581 2 Rebanadas',
    stock: 24,
    intereses: false,
    cuotas: 5,
    descripcion: 'La Tostadora Philips Daily HD2581 hace que cada mañana sea perfecta. Con 8 niveles de tostado y funciones especiales como descongelar y recalentar, logra el punto exacto que prefieres. Su diseño compacto se adapta a cualquier cocina.',
    principalDescripcion: 'Tostadora 2 rebanadas con 8 niveles de tostado',
    propiedades: '● Rebanadas: 2<br>● Niveles de tostado: 8<br>● Funciones: Descongelar, recalentar, cancelar<br>● Ranuras: Extra anchas<br>● Bandeja: Recogemigas extraíble<br>● Elevación: Alta automática<br>● Potencia: 830W',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Calidad Precio"],
    marca: 'Philips',
    modelo: 'Daily HD2581',
    color: ['Blanco', 'Negro'],
    peso: [1.6, 'kg'],
    tamaño: ['cm', 28, 16, 19],
    material: 'Plástico y acero inoxidable',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Perfecta para el desayuno',
        usuarioID: 1021,
        reseña: 'Tuesta parejo y los controles son muy precisos. La bandeja de migas es súper práctica.'
      }
    ]
  },
  {
    id: 18,
    precio: 98900,
    nombre: 'Extractor de Jugos Philips Viva HR1836 500W',
    stock: 13,
    intereses: false,
    cuotas: 12,
    descripcion: 'El Extractor de Jugos Philips Viva HR1836 extrae hasta 90% más jugo que las licuadoras tradicionales. Su tecnología de prensado en frío conserva vitaminas y nutrientes. Perfecto para jugos de frutas y verduras con pulpa mínima.',
    principalDescripcion: 'Extractor de jugos por prensado en frío con 90% más rendimiento',
    propiedades: '● Potencia: 500W<br>● Tecnología: Prensado en frío<br>● Rendimiento: 90% más jugo<br>● Boca: 75mm para frutas enteras<br>● Jarra: 1L con separador de espuma<br>● Pulpa: Contenedor 1.5L<br>● Limpieza: Función de preenjuague',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina"],
    marca: 'Philips',
    modelo: 'Viva HR1836',
    color: ['Negro', 'Plateado'],
    peso: [4.2, 'kg'],
    tamaño: ['cm', 43, 29, 18],
    material: 'Plástico libre de BPA y acero',
    reseñas: [
      {
        estrellas: 5,
        titulo: 'Jugos increíbles',
        usuarioID: 1022,
        reseña: 'Los jugos salen súper concentrados y sabrosos. Vale la pena la inversión para una vida más saludable.'
      }
    ]
  },
  {
    id: 19,
    precio: 167900,
    nombre: 'Calefactor Tiro Balanceado Emegi 3000 Kcal/h',
    stock: 8,
    intereses: true,
    cuotas: 15,
    descripcion: 'El Calefactor Emegi de Tiro Balanceado 3000 Kcal/h ofrece calefacción eficiente y segura. Su sistema de tiro balanceado toma aire del exterior y expulsa los gases de combustión, manteniendo el aire interior limpio. Ideal para ambientes de hasta 60m².',
    principalDescripcion: 'Calefactor tiro balanceado 3000 Kcal/h para ambientes hasta 60m²',
    propiedades: '● Potencia: 3000 Kcal/h<br>● Tipo: Tiro balanceado<br>● Cobertura: Hasta 60m²<br>● Encendido: Electrónico<br>● Termostato: Automático<br>● Seguridad: Válvula de corte por falta de oxígeno<br>● Instalación: Mural<br>● Dimensiones: 58 x 42 x 18 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Calefaccion","Living","Prestigioso","Confort"],
    marca: 'Emegi',
    modelo: '3000TB',
    color: ['Blanco'],
    peso: [18, 'kg'],
    tamaño: ['cm', 58, 42, 18],
    material: 'Chapa de acero esmaltada',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Excelente calefacción',
        usuarioID: 1023,
        reseña: 'Calienta muy bien el living-comedor. Es silencioso y el consumo es razonable. Muy seguro.'
      }
    ]
  },
  {
    id: 20,
    precio: 127900,
    nombre: 'Campana Extractora Franke Tender 60cm Acero Inox',
    stock: 6,
    intereses: true,
    cuotas: 12,
    descripcion: 'La Campana Extractora Franke Tender combina diseño moderno con alta eficiencia. Fabricada en acero inoxidable de primera calidad, cuenta con motor de alta potencia y 3 velocidades. Su sistema de iluminación LED realza tu área de cocción mientras extrae eficientemente humos y olores.',
    principalDescripcion: 'Campana extractora 60cm acero inoxidable con motor de alta potencia',
    propiedades: '● Ancho: 60 cm<br>● Material: Acero inoxidable<br>● Motor: Alta potencia<br>● Velocidades: 3<br>● Iluminación: LED<br>● Filtros: Metálicos lavables<br>● Caudal: 650 m³/h<br>● Nivel sonoro: 68 dB máximo',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Limpieza","Bienestar"],
    marca: 'Franke',
    modelo: 'Tender 60',
    color: ['Acero inoxidable'],
    peso: [12, 'kg'],
    tamaño: ['cm', 60, 50, 15],
    material: 'Acero inoxidable',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Muy buena campana',
        usuarioID: 1024,
        reseña: 'Extrae muy bien los olores y humos. El diseño es elegante y la iluminación LED es perfecta.'
      }
    ]
  },
  {
    id: 21,
    precio: 84900,
    nombre: 'Freidora de Aire Philips Essential HD9200 800g',
    stock: 17,
    intereses: false,
    cuotas: 10,
    descripcion: 'La Freidora de Aire Philips Essential HD9200 revoluciona tu forma de cocinar. Con tecnología Rapid Air, cocina con hasta 90% menos grasa. Su canasta de 800g es perfecta para 2-3 personas. Incluye múltiples recetas y es súper fácil de limpiar.',
    principalDescripcion: 'Freidora de aire 800g con tecnología Rapid Air, 90% menos grasa',
    propiedades: '● Capacidad: 800g (2-3 personas)<br>● Tecnología: Rapid Air<br>● Menos grasa: Hasta 90%<br>● Temperatura: 80-200°C<br>● Timer: 60 minutos<br>● Canasta: Antiadherente extraíble<br>● Potencia: 1400W<br>● Recetas: Libro incluido',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Bienestar"],
    marca: 'Philips',
    modelo: 'Essential HD9200',
    color: ['Negro', 'Blanco'],
    peso: [4.8, 'kg'],
    tamaño: ['cm', 40, 31, 29],
    material: 'Plástico y revestimiento antiadherente',
    reseñas: [
      {
        estrellas: 5,
        titulo: 'Cambió mi forma de cocinar',
        usuarioID: 1025,
        reseña: 'Increíble como quedan las papas fritas y pollo. Súper práctica y fácil de limpiar. La recomiendo 100%.'
      },
      {
        estrellas: 4.5,
        titulo: 'Excelente producto',
        usuarioID: 1026,
        reseña: 'Muy buena freidora, cocina parejo y rápido. El tamaño es perfecto para mi familia pequeña.'
      }
    ]
  },
  {
    id: 22,
    precio: 36900,
    nombre: 'Multiprocesadora Liliana Smart Prep AM318 600W',
    stock: 21,
    intereses: false,
    cuotas: 4,
    descripcion: 'La Multiprocesadora Liliana Smart Prep AM318 es tu aliada perfecta en la cocina. Con 600W de potencia y 15 funciones diferentes, desde picar hasta batir, hace todo en un solo equipo. Incluye múltiples accesorios y es súper fácil de usar.',
    principalDescripcion: 'Multiprocesadora 600W con 15 funciones y múltiples accesorios',
    propiedades: '● Potencia: 600W<br>● Funciones: 15 diferentes<br>● Bowl: 1.5L libre de BPA<br>● Velocidades: 2 + pulso<br>● Accesorios: 6 incluidos<br>● Funciones: Picar, rallar, rebanar, batir, mezclar<br>● Base: Antideslizante con ventosas',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Economico","Bienestar"],
    marca: 'Liliana',
    modelo: 'Smart Prep AM318',
    color: ['Blanco', 'Rojo'],
    peso: [3.2, 'kg'],
    tamaño: ['cm', 32, 20, 20],
    material: 'Plástico libre de BPA',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Muy práctica',
        usuarioID: 1027,
        reseña: 'Me ayuda muchísimo para preparar comidas rápidas. Los accesorios son de buena calidad.'
      }
    ]
  },
  {
    id: 23,
    precio: 52900,
    nombre: 'Horno Eléctrico Liliana AO938 38L Grill',
    stock: 12,
    intereses: false,
    cuotas: 6,
    descripcion: 'El Horno Eléctrico Liliana AO938 de 38 litros es perfecto para cocinar de todo. Con función grill y convección, logra cocciones uniformes y dorados perfectos. Su tamaño compacto lo hace ideal para cocinas pequeñas sin sacrificar capacidad.',
    principalDescripcion: 'Horno eléctrico 38L con grill y convección',
    propiedades: '● Capacidad: 38 litros<br>● Funciones: Grill y convección<br>● Temperatura: 60-230°C<br>● Timer: 120 minutos<br>● Bandeja: Antiadherente incluida<br>● Parrilla: Cromada<br>● Potencia: 1600W<br>● Puerta: Doble vidrio',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Prestigioso","Calefaccion","Cocina"],
    marca: 'Liliana',
    modelo: 'AO938',
    color: ['Negro'],
    peso: [12.5, 'kg'],
    tamaño: ['cm', 54, 43, 35],
    material: 'Acero esmaltado',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Buen horno para el precio',
        usuarioID: 1028,
        reseña: 'Cocina bien y el grill funciona perfecto. Ideal para pizzas y tartas. Buen tamaño.'
      }
    ]
  },
  {
    id: 24,
    precio: 78900,
    nombre: 'Mixer Philips ProMix HR1670 700W',
    stock: 16,
    intereses: false,
    cuotas: 9,
    descripcion: 'El Mixer Philips ProMix HR1670 con tecnología ProMix ofrece resultados perfectos en cada preparación. Su motor de 700W y cuchillas de 4 puntas garantizan mezclas homogéneas. Incluye vaso medidor y es ideal para sopas, smoothies y salsas.',
    principalDescripcion: 'Mixer 700W con tecnología ProMix y cuchillas de 4 puntas',
    propiedades: '● Potencia: 700W<br>● Tecnología: ProMix<br>● Cuchillas: 4 puntas de acero inoxidable<br>● Velocidades: 20<br>● Turbo: Función incluida<br>● Vaso: 700ml incluido<br>● Brazo: Acero inoxidable<br>● Accesorios: Vaso medidor y batidor',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina","Economico"],
    marca: 'Philips',
    modelo: 'ProMix HR1670',
    color: ['Blanco', 'Negro'],
    peso: [1.8, 'kg'],
    tamaño: ['cm', 40, 7, 7],
    material: 'Plástico ABS y acero inoxidable',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Excelente mixer',
        usuarioID: 1029,
        reseña: 'Muy potente y versátil. Lo uso para sopas y smoothies principalmente. Las 20 velocidades son geniales.'
      }
    ]
  },
  {
    id: 25,
    precio: 143900,
    nombre: 'Termotanque Eléctrico Rheem 80L',
    stock: 7,
    intereses: true,
    cuotas: 18,
    descripcion: 'El Termotanque Eléctrico Rheem de 80 litros garantiza agua caliente para toda la familia. Con resistencia blindada de larga duración y aislación térmica superior, mantiene la temperatura por más tiempo. Su diseño vertical optimiza el espacio y facilita la instalación.',
    principalDescripcion: 'Termotanque eléctrico 80L con resistencia blindada',
    propiedades: '● Capacidad: 80 litros<br>● Resistencia: Blindada 1500W<br>● Aislación: Poliuretano inyectado<br>● Tanque: Acero vitrificado<br>● Termostato: Regulable<br>● Válvula: Seguridad incluida<br>● Garantía: 5 años tanque, 2 años resistencia<br>● Dimensiones: 113 x 45 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina"],
    marca: 'Rheem',
    modelo: '80L Eléctrico',
    color: ['Blanco'],
    peso: [35, 'kg'],
    tamaño: ['cm', 113, 45, 45],
    material: 'Acero vitrificado',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Excelente termotanque',
        usuarioID: 1030,
        reseña: 'Mantiene muy bien la temperatura y calienta rápido. La instalación fue sencilla. Muy recomendable.'
      }
    ]
  },
  {
    id: 26,
    precio: 47900,
    nombre: 'Centrifugadora Drean Secamatic 6.5kg',
    stock: 9,
    intereses: false,
    cuotas: 6,
    descripcion: 'La Centrifugadora Drean Secamatic es perfecta para eliminar el exceso de agua de la ropa después del lavado. Con 6.5kg de capacidad y 2800 RPM, deja la ropa casi seca, reduciendo significativamente el tiempo de secado al aire libre.',
    principalDescripcion: 'Centrifugadora 6.5kg con 2800 RPM de velocidad',
    propiedades: '● Capacidad: 6.5 kg<br>● Velocidad: 2800 RPM<br>● Timer: 15 minutos máximo<br>● Tapa: Transparente con seguro<br>● Motor: Inducción<br>● Base: Antivibratoria<br>● Canasto: Acero inoxidable perforado',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Economico","Cocina"],
    marca: 'Drean',
    modelo: 'Secamatic',
    color: ['Blanco'],
    peso: [22, 'kg'],
    tamaño: ['cm', 65, 42, 42],
    material: 'Plástico y acero inoxidable',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Muy útil',
        usuarioID: 1031,
        reseña: 'Complemento perfecto para el lavarropas. Deja la ropa súper escurrida, se seca mucho más rápido.'
      }
    ]
  },
  {
    id: 27,
    precio: 89900,
    nombre: 'Parrilla Eléctrica Philips Indoor HD6370 2000W',
    stock: 14,
    intereses: false,
    cuotas: 12,
    descripcion: 'La Parrilla Eléctrica Philips Indoor HD6370 te permite disfrutar de asados perfectos en casa todo el año. Con tecnología infrarroja avanzada y 2000W de potencia, cocina carnes, verduras y pescados con el sabor auténtico de la parrilla. Su superficie antiadherente facilita la limpieza.',
    principalDescripcion: 'Parrilla eléctrica indoor 2000W con tecnología infrarroja',
    propiedades: '● Potencia: 2000W<br>● Tecnología: Infrarroja avanzada<br>● Superficie: 41 x 26 cm antiadherente<br>● Temperatura: Control ajustable<br>● Bandeja: Recolectora de grasa<br>● Calentamiento: Rápido en 6 minutos<br>● Limpieza: Apta lavavajillas (placa)<br>● Indicador: LED de temperatura',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Calefaccion0","Prestigioso","Confort","Bienestar"],
    marca: 'Philips',
    modelo: 'Indoor HD6370',
    color: ['Negro', 'Plateado'],
    peso: [7.2, 'kg'],
    tamaño: ['cm', 46, 35, 12],
    material: 'Aluminio fundido y plástico',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Sabor a parrilla en casa',
        usuarioID: 1032,
        reseña: 'Increíble como logra el sabor a parrilla. Perfecta para departamentos. Fácil de limpiar.'
      }
    ]
  },
  {
    id: 28,
    precio: 24900,
    nombre: 'Pava Eléctrica Philips Daily HD9350 1.5L',
    stock: 28,
    intereses: false,
    cuotas: 3,
    descripcion: 'La Pava Eléctrica Philips Daily HD9350 hierve agua rápidamente y con seguridad. Su capacidad de 1.5L es ideal para familias y su base 360° permite colocarla desde cualquier ángulo. Incluye filtro anti-sarro removible y apagado automático.',
    principalDescripcion: 'Pava eléctrica 1.5L con base 360° y apagado automático',
    propiedades: '● Capacidad: 1.5 litros<br>● Potencia: 2200W<br>● Base: 360° inalámbrica<br>● Apagado: Automático<br>● Filtro: Anti-sarro removible<br>● Indicador: Nivel de agua<br>● Protección: Funcionamiento en seco<br>● Material: Plástico libre de BPA',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina","Economico"],
    marca: 'Philips',
    modelo: 'Daily HD9350',
    color: ['Blanco', 'Negro'],
    peso: [1.2, 'kg'],
    tamaño: ['cm', 24, 16, 23],
    material: 'Plástico libre de BPA',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Práctica y rápida',
        usuarioID: 1033,
        reseña: 'Hierve el agua súper rápido. La base giratoria es muy cómoda. Buen producto por el precio.'
      }
    ]
  },
  {
    id: 29,
    precio: 167900,
    nombre: 'Lavarropa-Secarropa LG WD12600 7kg/4kg Inverter',
    stock: 4,
    intereses: true,
    cuotas: 24,
    descripcion: 'El Lavarropa-Secarropa LG WD12600 combina lavado y secado en un solo equipo. Con tecnología Inverter Direct Drive, es más silencioso y eficiente. Capacidad de 7kg para lavado y 4kg para secado, perfecto para optimizar espacio y tiempo. Incluye múltiples programas inteligentes y conectividad WiFi para control remoto.',
    principalDescripcion: 'Lavarropa-secarropa 7kg/4kg con tecnología Inverter y WiFi',
    propiedades: '● Lavado: 7 kg<br>● Secado: 4 kg<br>● Tecnología: Inverter Direct Drive<br>● Velocidad: 1200 RPM<br>● Programas: 14 inteligentes<br>● Conectividad: WiFi SmartThinQ<br>● Eficiencia: A+++<br>● Nivel sonoro: 52 dB<br>● Garantía motor: 10 años',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Limpieza","Calidad Precio"],
    marca: 'LG',
    modelo: 'WD12600',
    color: ['Blanco', 'Acero inoxidable'],
    peso: [76, 'kg'],
    tamaño: ['cm', 85, 60, 56],
    material: 'Acero inoxidable y plástico ABS',
    reseñas: [
      {
        estrellas: 5,
        titulo: 'Excelente 2 en 1',
        usuarioID: 1034,
        reseña: 'Perfecto para departamentos chicos. Lava y seca muy bien. La app es súper útil para programar lavados.'
      }
    ]
  },
  {
    id: 30,
    precio: 58900,
    nombre: 'Anafe Eléctrico Liliana AE500 2 Hornallas',
    stock: 18,
    intereses: false,
    cuotas: 7,
    descripcion: 'El Anafe Eléctrico Liliana AE500 es la solución perfecta para cocinas sin gas. Con 2 hornallas de diferentes tamaños y potencias regulables, permite cocinar todo tipo de preparaciones. Su superficie lisa facilita la limpieza y su diseño compacto lo hace ideal para cualquier espacio.',
    principalDescripcion: 'Anafe eléctrico 2 hornallas con potencia regulable',
    propiedades: '● Hornallas: 2 (diámetros 15 y 18 cm)<br>● Potencia: 1500W y 1000W<br>● Control: Termostato regulable<br>● Superficie: Lisa de fácil limpieza<br>● Base: Antideslizante<br>● Indicador: Luces piloto<br>● Protección: Sobrecalentamiento<br>● Cable: 1.5 metros',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina","Economico","Calefaccion"],
    marca: 'Liliana',
    modelo: 'AE500',
    color: ['Blanco', 'Negro'],
    peso: [3.8, 'kg'],
    tamaño: ['cm', 48, 28, 8],
    material: 'Hierro fundido y plástico',
    reseñas: [
      {
        estrellas: 3.5,
        titulo: 'Cumple su función',
        usuarioID: 1035,
        reseña: 'Bueno para uso ocasional. Las hornallas calientan bien pero tardan un poco. Práctico para tener de emergencia.'
      }
    ]
  },
  {
    id: 31,
    precio: 450000,
    nombre: 'Heladera No Frost Samsung RT38K5932SL 380 Litros Inox',
    stock: 15,
    intereses: false,
    cuotas: 12,
    descripcion: 'La heladera Samsung RT38K5932SL combina tecnología No Frost con un diseño elegante en acero inoxidable. Con 380 litros de capacidad total, es perfecta para familias medianas. Su sistema No Frost evita la formación de hielo, manteniendo los alimentos frescos por más tiempo. Cuenta con tecnología Twin Cooling Plus que mantiene la humedad óptima en ambos compartimentos. El dispensador de agua fría externo te brinda comodidad sin abrir la puerta. Incluye cajones deslizables y estantes ajustables para maximizar el espacio de almacenamiento.',
    principalDescripcion: 'Heladera No Frost de 380L con tecnología Twin Cooling Plus y dispensador externo',
    propiedades: 'Capacidad total: 380 litros<br>Freezer: 98 litros<br>Refrigerador: 282 litros<br>Tecnología: No Frost, Twin Cooling Plus<br>Dispensador: Agua fría externo<br>Estantes: Vidrio templado ajustables<br>Cajones: Frutas y verduras con control de humedad<br>Eficiencia energética: A+<br>Dimensiones: 178 x 59.5 x 64.5 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina","Prestigioso"],
    marca: 'Samsung',
    modelo: 'RT38K5932SL',
    color: ['Inox'],
    peso: [65, 'kg'],
    tamaño: ['cm', 178, 59.5, 64.5],
    material: 'Acero inoxidable',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Excelente heladera, muy espaciosa',
        usuarioID: 1001,
        reseña: 'La compré hace 6 meses y estoy muy conforme. El No Frost funciona perfecto y el dispensador de agua es muy práctico. El único detalle es que hace un poco de ruido cuando arranca el compresor.'
      },
      {
        estrellas: 5,
        titulo: 'Perfecta para mi familia',
        usuarioID: 1002,
        reseña: 'Ideal para una familia de 4 personas. Los alimentos se mantienen frescos mucho más tiempo que en mi heladera anterior.'
      }
    ]
  },
  {
    id: 32,
    precio: 380000,
    nombre: 'Lavarropas Automático Drean Next 8.12 Eco 8Kg Carga Frontal',
    stock: 8,
    intereses: true,
    cuotas: 18,
    descripcion: 'El Lavarropas Drean Next 8.12 Eco está diseñado para brindarte eficiencia y practicidad en cada lavado. Con capacidad para 8 kilos, es ideal para familias medianas. Su clasificación energética A+++ te permite ahorrar en consumo eléctrico. Cuenta con 12 programas de lavado incluyendo ciclos rápidos, eco y delicados. El display digital te muestra el tiempo restante y permite programar inicio diferido. Su sistema Fuzzy Logic ajusta automáticamente el tiempo y cantidad de agua según la carga. Incluye protección contra desequilibrios y bloqueo infantil para mayor seguridad.',
    principalDescripcion: 'Lavarropas automático 8kg con 12 programas y eficiencia energética A+++',
    propiedades: '• Capacidad: 8 kg<br>• Carga: Frontal<br>• Programas: 12 (Rápido, Eco, Delicado, Lana, etc.)<br>• Centrifugado: 1200 RPM<br>• Eficiencia energética: A+++<br>• Display: Digital con timer<br>• Funciones: Inicio diferido, bloqueo infantil<br>• Dimensiones: 84 x 59.5 x 56 cm<br>• Nivel de ruido: 58 dB',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Limpieza","Economico"],
    marca: 'Drean',
    modelo: 'Next 8.12 Eco',
    color: ['Blanco'],
    peso: [68, 'kg'],
    tamaño: ['cm', 84, 59.5, 56],
    material: 'Acero esmaltado',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Buen lavarropas, lava muy bien',
        usuarioID: 1003,
        reseña: 'Lo tengo hace un año y funciona perfecto. Los programas eco realmente ahorran agua y luz. Solo que el ciclo rápido podría ser más rápido.'
      }
    ]
  },
  {
    id: 33,
    precio: 95000,
    nombre: 'Microondas Electrolux EMD20G3MLW 20L Digital Blanco',
    stock: 25,
    intereses: false,
    cuotas: 6,
    descripcion: 'Microondas digital con 20 litros de capacidad, perfecto para uso diario. Panel de control digital con 8 niveles de potencia y menús preestablecidos para facilitar la cocción.',
    principalDescripcion: 'Microondas 20L con panel digital y 8 niveles de potencia',
    propiedades: 'Capacidad: 20 litros<br>Potencia: 700W<br>Niveles de potencia: 8<br>Panel: Digital<br>Funciones: Descongelar, recalentar<br>Plato giratorio: 25.5 cm<br>Dimensiones: 44 x 35 x 26 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina"],
    marca: 'Electrolux',
    modelo: 'EMD20G3MLW',
    color: ['Blanco'],
    peso: [11, 'kg'],
    tamaño: ['cm', 44, 35, 26],
    material: 'Plástico y acero',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Muy práctico y fácil de usar',
        usuarioID: 1004,
        reseña: 'Perfecto para recalentar comida y descongelar. El panel digital es muy intuitivo.'
      }
    ]
  },
  {
    id: 34,
    precio: 320000,
    nombre: 'Aire Acondicionado Split Midea Inverter 3500W Frío/Calor',
    stock: 12,
    intereses: true,
    cuotas: 24,
    descripcion: 'Aire acondicionado split con tecnología inverter que garantiza mayor eficiencia energética y menor consumo. Con 3500W de potencia, es ideal para ambientes de hasta 35m². Su función frío/calor te permite usarlo todo el año. El control remoto incluye temporizador y modo sleep. Filtros lavables y función autodiagnóstico para facilitar el mantenimiento. Su diseño moderno se adapta a cualquier decoración.',
    principalDescripcion: 'Aire split inverter 3500W frío/calor con control remoto y filtros lavables',
    propiedades: 'Potencia: 3500W (12000 BTU)<br>Tipo: Split inverter<br>Función: Frío/Calor<br>Cobertura: Hasta 35m²<br>Eficiencia energética: A<br>Control: Remoto con display<br>Filtros: Lavables<br>Gas refrigerante: R410A<br>Unidad interior: 80 x 29 x 19 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Confort","Bienestar","Alta Gama"],
    marca: 'Midea',
    modelo: 'MSR-12HRDN1',
    color: ['Blanco'],
    peso: [9, 'kg'],
    tamaño: ['cm', 80, 29, 19],
    material: 'Plástico ABS',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Enfría rápido y es silencioso',
        usuarioID: 1005,
        reseña: 'Muy conforme con la compra. Enfría la habitación en pocos minutos y no hace ruido molesto.'
      }
    ]
  },
  {
    id: 35,
    precio: 85000,
    nombre: 'Licuadora Philips HR2157 ProBlend 6 700W con Jarra Tritan',
    stock: 30,
    intereses: false,
    cuotas: 3,
    descripcion: 'Licuadora de alta potencia con motor de 700W y jarra de Tritan libre de BPA. Sus 6 cuchillas ProKinetic garantizan licuados perfectos.',
    principalDescripcion: 'Licuadora 700W con jarra Tritan y 6 cuchillas ProKinetic',
    propiedades: 'Motor: 700W<br>Jarra: 2 litros Tritan<br>Cuchillas: 6 ProKinetic<br>Velocidades: 2 + pulso<br>Funciones: Hielo picado<br>Tapa: Con vaso medidor<br>Base: Antideslizante',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina"],
    marca: 'Philips',
    modelo: 'HR2157',
    color: ['Negro', 'Transparente'],
    peso: [2.5, 'kg'],
    tamaño: ['cm', 40, 20, 20],
    material: 'Tritan y plástico',
    reseñas: [
      {
        estrellas: 5,
        titulo: 'Excelente licuadora, muy potente',
        usuarioID: 1006,
        reseña: 'Licua todo sin problemas, hasta hielo. La jarra es muy resistente y fácil de limpiar.'
      }
    ]
  },
  {
    id: 36,
    precio: 180000,
    nombre: 'Horno Eléctrico Atma HE4010E 40L con Grill y Convección',
    stock: 18,
    intereses: true,
    cuotas: 12,
    descripcion: 'Horno eléctrico de 40 litros con función grill y convección para cocción uniforme. Incluye 4 funciones de cocción, timer de 60 minutos y temperatura regulable hasta 250°C. Viene con bandeja, parrilla y mango extraíble. Su puerta de vidrio doble mantiene el calor y permite ver el interior sin abrir. Ideal para familias que buscan versatilidad en la cocina sin ocupar mucho espacio.',
    principalDescripcion: 'Horno eléctrico 40L con grill, convección y 4 funciones de cocción',
    propiedades: 'Capacidad: 40 litros<br>Potencia: 1800W<br>Temperatura: 100°C a 250°C<br>Funciones: 4 (superior, inferior, grill, convección)<br>Timer: 60 minutos<br>Accesorios: Bandeja, parrilla, mango<br>Puerta: Vidrio doble<br>Dimensiones: 59 x 47 x 36 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Calefaccion"],
    marca: 'Atma',
    modelo: 'HE4010E',
    color: ['Negro'],
    peso: [14, 'kg'],
    tamaño: ['cm', 59, 47, 36],
    material: 'Acero esmaltado',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Buen horno para el precio',
        usuarioID: 1007,
        reseña: 'Cocina bien y es fácil de usar. La convección funciona perfectamente. Solo le falta un poco más de capacidad.'
      }
    ]
  },
  {
    id: 37,
    precio: 120000,
    nombre: 'Aspiradora Electrolux Spin Air SA20 1600W Sin Bolsa',
    stock: 22,
    intereses: false,
    cuotas: 9,
    descripcion: 'Aspiradora sin bolsa con tecnología ciclónica y filtro HEPA lavable. Motor de 1600W que garantiza máxima succión en todo tipo de superficies.',
    principalDescripcion: 'Aspiradora 1600W sin bolsa con tecnología ciclónica y filtro HEPA',
    propiedades: 'Potencia: 1600W<br>Tipo: Sin bolsa, ciclónica<br>Filtro: HEPA lavable<br>Capacidad: 1.5L<br>Accesorios: 3 cepillos<br>Cable: 5 metros<br>Radio de acción: 8 metros<br>Nivel de ruido: 78 dB',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Limpieza","Calidad Precio"],
    marca: 'Electrolux',
    modelo: 'SA20',
    color: ['Azul', 'Gris'],
    peso: [4.5, 'kg'],
    tamaño: ['cm', 35, 25, 30],
    material: 'Plástico ABS',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Aspira muy bien, fácil de vaciar',
        usuarioID: 1008,
        reseña: 'Excelente succión y no necesita bolsas. El filtro HEPA es genial para alergias.'
      }
    ]
  },
  {
    id: 38,
    precio: 75000,
    nombre: 'Cafetera Express Oster BVSTEM6601 Prima Latte 15 Bar',
    stock: 16,
    intereses: false,
    cuotas: 6,
    descripcion: 'Cafetera express con bomba de 15 bares para preparar espresso perfecto. Incluye vaporizador para hacer cappuccinos y lattes. Portafiltro de acero inoxidable y bandeja removible.',
    principalDescripcion: 'Cafetera express 15 bar con vaporizador para cappuccinos y lattes',
    propiedades: 'Presión: 15 bares<br>Capacidad agua: 1.25L<br>Vaporizador: Sí<br>Portafiltro: Acero inoxidable<br>Bandeja: Removible<br>Indicadores: LED<br>Dimensiones: 31 x 24 x 30 cm<br>Potencia: 1050W',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Alta Gama"],
    marca: 'Oster',
    modelo: 'BVSTEM6601',
    color: ['Negro', 'Plateado'],
    peso: [4.2, 'kg'],
    tamaño: ['cm', 31, 24, 30],
    material: 'Acero inoxidable',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Hace buen café, fácil de usar',
        usuarioID: 1009,
        reseña: 'El espresso sale con buena crema y el vaporizador funciona bien. Relación precio-calidad muy buena.'
      }
    ]
  },
  {
    id: 39,
    precio: 45000,
    nombre: 'Batidora de Pie Peabody PE-BM9108 300W Bowl Acero Inox',
    stock: 35,
    intereses: false,
    cuotas: 0,
    descripcion: 'Batidora de pie con bowl de acero inoxidable de 4.5 litros. Motor de 300W con 6 velocidades para todo tipo de preparaciones.',
    principalDescripcion: 'Batidora de pie 300W con bowl 4.5L de acero inoxidable y 6 velocidades',
    propiedades: 'Motor: 300W<br>Bowl: 4.5L acero inoxidable<br>Velocidades: 6<br>Accesorios: Batidor, gancho, pala<br>Cabezal: Basculante<br>Base: Antideslizante<br>Dimensiones: 35 x 20 x 35 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina"],
    marca: 'Peabody',
    modelo: 'PE-BM9108',
    color: ['Blanco'],
    peso: [5.8, 'kg'],
    tamaño: ['cm', 35, 20, 35],
    material: 'Acero inoxidable',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Perfecta para repostería',
        usuarioID: 1010,
        reseña: 'La uso para hacer tortas y funciona excelente. El bowl es grande y los accesorios son de buena calidad.'
      }
    ]
  },
  {
    id: 40,
    precio: 280000,
    nombre: 'Lavavajillas Drean DLV-126 12 Cubiertos 6 Programas',
    stock: 6,
    intereses: true,
    cuotas: 18,
    descripcion: 'Lavavajillas con capacidad para 12 cubiertos y 6 programas de lavado. Eficiencia energética A+ que cuida el ambiente y tu bolsillo. Sistema de distribución de agua en 3 niveles para limpieza profunda. Incluye canasto superior ajustable en altura y dispensador automático de detergente y abrillantador. Panel de control intuitivo con display LED que muestra el tiempo restante del ciclo.',
    principalDescripcion: 'Lavavajillas 12 cubiertos con 6 programas y eficiencia energética A+',
    propiedades: 'Capacidad: 12 cubiertos<br>Programas: 6 (Intensivo, Normal, Eco, Rápido, Cristalería, Prelavado)<br>Eficiencia energética: A+<br>Nivel de ruido: 49 dB<br>Sistema: 3 niveles de lavado<br>Canastos: Ajustables en altura<br>Dispensador: Automático<br>Dimensiones: 84.5 x 59.8 x 57 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Limpieza","Alta Gama"],
    marca: 'Drean',
    modelo: 'DLV-126',
    color: ['Blanco'],
    peso: [43, 'kg'],
    tamaño: ['cm', 84.5, 59.8, 57],
    material: 'Acero inoxidable',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Excelente compra, lava muy bien',
        usuarioID: 1011,
        reseña: 'Desde que lo tengo no lavo más platos a mano. Es muy silencioso y deja todo impecable.'
      }
    ]
  },
  {
    id: 41,
    precio: 65000,
    nombre: 'Procesadora Philips HR7320 750W Daily Collection',
    stock: 20,
    intereses: false,
    cuotas: 6,
    descripcion: 'Procesadora multifunción con motor de 750W y bowl de 2.1 litros. Incluye múltiples accesorios para picar, rebanar, rallar y amasar.',
    principalDescripcion: 'Procesadora 750W multifunción con bowl 2.1L y múltiples accesorios',
    propiedades: 'Motor: 750W<br>Bowl: 2.1L<br>Velocidades: 2 + pulso<br>Accesorios: Cuchilla, disco rallador, disco rebanador<br>Tapa: Con tubo de alimentación<br>Base: Antideslizante<br>Seguridad: Bloqueo automático',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina"],
    marca: 'Philips',
    modelo: 'HR7320',
    color: ['Blanco'],
    peso: [3.2, 'kg'],
    tamaño: ['cm', 28, 25, 40],
    material: 'Plástico y acero',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Muy útil para la cocina',
        usuarioID: 1012,
        reseña: 'Pica, ralla y rebana perfectamente. Los accesorios son fáciles de cambiar y limpiar.'
      }
    ]
  },
  {
    id: 42,
    precio: 38000,
    nombre: 'Tostadora Atma TO8003E 4 Rebanadas Acero Inoxidable',
    stock: 40,
    intereses: false,
    cuotas: 0,
    descripcion: 'Tostadora de 4 rebanadas con carcasa de acero inoxidable. 7 niveles de tostado y funciones especiales para todo tipo de panes.',
    principalDescripcion: 'Tostadora 4 rebanadas de acero inoxidable con 7 niveles de tostado',
    propiedades: 'Capacidad: 4 rebanadas<br>Niveles de tostado: 7<br>Funciones: Recalentar, descongelar, cancelar<br>Ranuras: Extra anchas<br>Bandeja: Recogemigas extraíble<br>Cable: Recogecables<br>Dimensiones: 28 x 19 x 20 cm<br>Potencia: 1400W',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina","Calidad Precio"],
    marca: 'Atma',
    modelo: 'TO8003E',
    color: ['Acero inoxidable'],
    peso: [2.1, 'kg'],
    tamaño: ['cm', 28, 19, 20],
    material: 'Acero inoxidable',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Perfecta para el desayuno familiar',
        usuarioID: 1013,
        reseña: 'Tuesta parejo y tiene buen tamaño. El acero inoxidable le da un toque elegante a la cocina.'
      }
    ]
  },
  {
    id: 43,
    precio: 52000,
    nombre: 'Multiprocesadora Black+Decker FP1600B 8 Tazas 450W',
    stock: 28,
    intereses: false,
    cuotas: 3,
    descripcion: 'Multiprocesadora con bowl de 8 tazas y motor de 450W. Perfecta para preparaciones grandes con múltiples funciones de procesado.',
    principalDescripcion: 'Multiprocesadora 450W con bowl de 8 tazas y múltiples funciones',
    propiedades: 'Capacidad: 8 tazas (1.9L)<br>Motor: 450W<br>Funciones: Picar, rebanar, rallar, amasar<br>Cuchillas: Acero inoxidable<br>Control: 2 velocidades + pulso<br>Tapa: Con tubo alimentador<br>Pies: Antideslizantes',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Calidad Precio","Cocina"],
    marca: 'Black+Decker',
    modelo: 'FP1600B',
    color: ['Negro'],
    peso: [2.8, 'kg'],
    tamaño: ['cm', 25, 22, 35],
    material: 'Plástico',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Buena relación precio-calidad',
        usuarioID: 1014,
        reseña: 'Funciona bien para uso doméstico. El bowl es grande y procesa rápido.'
      }
    ]
  },
  {
    id: 44,
    precio: 90000,
    nombre: 'Sandwichera Atma SM8800E Grill Multifunción Antiadherente',
    stock: 32,
    intereses: false,
    cuotas: 6,
    descripcion: 'Sandwichera grill multifunción con placas antiadherentes removibles. Funciona como sandwichera, grill y plancha con temperatura ajustable.',
    principalDescripcion: 'Sandwichera grill multifunción con placas removibles antiadherentes',
    propiedades: 'Tipo: Multifunción (sandwichera/grill/plancha)<br>Placas: Antiadherentes removibles<br>Temperatura: Ajustable<br>Indicadores: LED de encendido y temperatura<br>Mango: Toque frío<br>Bandeja: Recoge grasas<br>Dimensiones: 35 x 30 x 15 cm<br>Potencia: 2000W',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
    categorias:["Cocina","Confort","Calidad Precio"],
    marca: 'Atma',
    modelo: 'SM8800E',
    color: ['Negro', 'Plateado'],
    peso: [3.5, 'kg'],
    tamaño: ['cm', 35, 30, 15],
    material: 'Acero y antiadherente',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Muy versátil, la uso para todo',
        usuarioID: 1015,
        reseña: 'Excelente para sandwiches, carnes y verduras. Las placas removibles facilitan mucho la limpieza.'
      }
    ]
  },
  {
    id: 45,
    precio: 180000,
    nombre: 'Secarropas Drean Gold Blue 6.06 Eco 6Kg a Gas',
    stock: 10,
    intereses: true,
    cuotas: 15,
    descripcion: 'Secarropas a gas de 6kg con eficiencia energética superior. Sistema de secado por convección que cuida las fibras de la ropa. Incluye 4 programas automáticos y control de tiempo manual. Su design compacto lo hace ideal para espacios reducidos. Conexión a gas natural o envasado con kit incluido.',
    principalDescripcion: 'Secarropas a gas 6kg con 4 programas automáticos y conexión dual',
    propiedades: 'Capacidad: 6 kg<br>Tipo: Gas (natural o envasado)<br>Programas: 4 automáticos + manual<br>Sistema: Convección<br>Tambor: Acero inoxidable<br>Filtro: Pelusas extraíble<br>Seguridad: Válvula de gas automática<br>Dimensiones: 67 x 60 x 60 cm<br>Eficiencia: A++',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Limpieza","Confort","Calidad Precio"],
    marca: 'Drean',
    modelo: 'Gold Blue 6.06 Eco',
    color: ['Blanco'],
    peso: [45, 'kg'],
    tamaño: ['cm', 67, 60, 60],
    material: 'Acero esmaltado',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Seca rápido y economico',
        usuarioID: 1016,
        reseña: 'Mucho más económico que uno eléctrico. Seca la ropa perfectamente y no la daña.'
      }
    ]
  },
  {
    id: 46,
    precio: 42000,
    nombre: 'Pava Eléctrica Philips HD9350/90 1.7L Acero Inoxidable',
    stock: 45,
    intereses: false,
    cuotas: 0,
    descripcion: 'Pava eléctrica de acero inoxidable con capacidad de 1.7 litros. Hierve agua rápidamente con su resistencia de 2200W.',
    principalDescripcion: 'Pava eléctrica 1.7L de acero inoxidable con resistencia 2200W',
    propiedades: 'Capacidad: 1.7 litros<br>Potencia: 2200W<br>Material: Acero inoxidable<br>Base: 360° inalámbrica<br>Indicador: Nivel de agua<br>Seguridad: Apagado automático<br>Filtro: Anti-cal extraíble<br>Dimensiones: 22 x 16 x 24 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina"],
    marca: 'Philips',
    modelo: 'HD9350/90',
    color: ['Acero inoxidable'],
    peso: [1.2, 'kg'],
    tamaño: ['cm', 22, 16, 24],
    material: 'Acero inoxidable',
    reseñas: [
      {
        estrellas: 5,
        titulo: 'Hierve súper rápido',
        usuarioID: 1017,
        reseña: 'La mejor pava que tuve. Hierve el agua en menos de 3 minutos y es muy segura.'
      }
    ]
  },
  {
    id: 47,
    precio: 155000,
    nombre: 'Purificador de Agua PSA Nexus 7 Etapas con Osmosis Inversa',
    stock: 14,
    intereses: true,
    cuotas: 12,
    descripcion: 'Purificador de agua de 7 etapas con tecnología de ósmosis inversa que elimina hasta el 99% de contaminantes. Incluye lámpara UV para desinfección total. Capacidad de producción de 280 litros por día. Sistema de autolimpieza y indicadores LED de estado de filtros. Instalación bajo mesada con canilla independiente. Ideal para familias que buscan agua pura y segura directamente del grifo.',
    principalDescripcion: 'Purificador 7 etapas con ósmosis inversa y lámpara UV, 280L/día',
    propiedades: 'Etapas: 7 (sedimentos, carbón, ósmosis inversa, UV)<br>Capacidad: 280 litros/día<br>Eliminación: 99% contaminantes<br>Tecnología: Ósmosis inversa + UV<br>Instalación: Bajo mesada<br>Indicadores: LED estado filtros<br>Canilla: Independiente incluida<br>Dimensiones: 37 x 17 x 42 cm<br>Garantía: 2 años',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cocina","Bienestar"],
    marca: 'PSA',
    modelo: 'Nexus 7',
    color: ['Blanco'],
    peso: [8.5, 'kg'],
    tamaño: ['cm', 37, 17, 42],
    material: 'Plástico alimentario',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Agua de excelente calidad',
        usuarioID: 1018,
        reseña: 'Notamos la diferencia inmediatamente. El agua sale cristalina y sin sabor a cloro.'
      }
    ]
  },
  {
    id: 48,
    precio: 72000,
    nombre: 'Freidora de Aire Philips HD9200/91 Viva Collection 4.1L',
    stock: 26,
    intereses: false,
    cuotas: 6,
    descripcion: 'Freidora de aire con tecnología Rapid Air que cocina con 80% menos grasa. Capacidad de 4.1 litros ideal para familias de 4-5 personas. Control de temperatura hasta 200°C y timer de 30 minutos. Canasta antiadherente extraíble y apta para lavavajillas.',
    principalDescripcion: 'Freidora de aire 4.1L con tecnología Rapid Air, 80% menos grasa',
    propiedades: 'Capacidad: 4.1 litros<br>Tecnología: Rapid Air<br>Temperatura: 80°C a 200°C<br>Timer: 30 minutos<br>Canasta: Antiadherente extraíble<br>Indicadores: LED<br>Potencia: 1400W<br>Dimensiones: 32 x 32 x 42 cm<br>Libro: Recetas incluido',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Cosina","bienestar"],
    marca: 'Philips',
    modelo: 'HD9200/91',
    color: ['Negro'],
    peso: [4.8, 'kg'],
    tamaño: ['cm', 32, 32, 42],
    material: 'Plástico y metal',
    reseñas: [
      {
        estrellas: 4.5,
        titulo: 'Cocina súper saludable',
        usuarioID: 1019,
        reseña: 'Las papas fritas quedan crujientes sin aceite. Muy fácil de usar y limpiar.'
      }
    ]
  },
  {
    id: 49,
    precio: 35000,
    nombre: 'Plancha a Vapor Black+Decker IR03V 1200W Antiadherente',
    stock: 38,
    intereses: false,
    cuotas: 0,
    descripcion: 'Plancha a vapor con suela antiadherente de cerámica. Tanque de 300ml y sistema de vapor vertical para cortinas y ropa colgada.',
    principalDescripcion: 'Plancha a vapor 1200W con suela cerámica antiadherente y vapor vertical',
    propiedades: 'Potencia: 1200W<br>Tanque: 300ml<br>Suela: Cerámica antiadherente<br>Vapor: Variable + vertical<br>Temperatura: Regulable<br>Cable: 1.8m giratorio<br>Funciones: Autolimpieza, antigoteo<br>Dimensiones: 28 x 12 x 15 cm',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Limpieza","Confort"],
    marca: 'Black+Decker',
    modelo: 'IR03V',
    color: ['Azul', 'Blanco'],
    peso: [1.1, 'kg'],
    tamaño: ['cm', 28, 12, 15],
    material: 'Cerámica y plástico',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Plancha bien y es liviana',
        usuarioID: 1020,
        reseña: 'Desliza muy suave y el vapor funciona perfecto. Buena relación precio-calidad.'
      }
    ]
  },
  {
    id: 50,
    precio: 28000,
    nombre: 'Ventilador de Pie Liliana VTP2016 3 Velocidades 16 Pulgadas',
    stock: 50,
    intereses: false,
    cuotas: 0,
    descripcion: 'Ventilador de pie de 16 pulgadas con 3 velocidades y oscilación automática. Motor silencioso y base estable.',
    principalDescripcion: 'Ventilador de pie 16" con 3 velocidades, oscilación y motor silencioso',
    propiedades: 'Tamaño: 16 pulgadas<br>Velocidades: 3<br>Oscilación: Automática<br>Altura: Regulable 110-130 cm<br>Motor: Silencioso<br>Base: Reforzada<br>Control: Perillas frontales<br>Cable: 1.5m',
    imagenes: [
      'Search',
      'Principal',
      '1Carru', '2Carru', '3Carru'
    ],
categorias:["Confort","Biestar"],
    marca: 'Liliana',
    modelo: 'VTP2016',
    color: ['Blanco'],
    peso: [4.2, 'kg'],
    tamaño: ['cm', 130, 42, 42],
    material: 'Plástico y metal',
    reseñas: [
      {
        estrellas: 4,
        titulo: 'Buen ventilador, muy silencioso',
        usuarioID: 1021,
        reseña: 'Cumple su función perfectamente. No hace ruido molesto y refresca bien.'
      }
    ]
  }
]

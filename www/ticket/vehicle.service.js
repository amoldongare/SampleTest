angular.module('reader.services.vehicle', [])
  .service('VehicleService', ['$http', function ($http) {
    var vehicles = {};

    this.reduce = function (list, query) {
      list = list || [];
      return list.filter(function (make) {
        if (!query) {
          return true;
        }
        else {
          return new RegExp(query, 'i').test(make.description);
        }
      })
    };
    this.modelsFromMake = function (make) {

      return vehicles.models.filter(function (model) {
        if (typeof make === "undefined")
          return [];
        else
          return (model.make === make.code);
      });
    };
    vehicles.todos = [
      {
        'text': "get milk",
        'done': true
      },
      {
        'text': "get milk2",
        'done': false
      }
    ];
    vehicles.makes = [
      {
        "code": "MOSL",
        "description": "MOSLER"
      },
      {
        "code": "ALMU",
        "description": "ALUMACAR  USA, LLC"
      },
      {
        "code": "CRUS",
        "description": "CRUISE CAR, INC."
      },
      {
        "code": "EVRT",
        "description": "EVERETT-MORRISON MOTORCARS"
      },
      {
        "code": "FPEC",
        "description": "FAIRPLAY ELECTRIC CARS, LLC"
      },
      {
        "code": "GRMA",
        "description": "GRUMMAN ALLIED INDS., INC."
      },
      {
        "code": "HDKP",
        "description": "HDK PLASTIC FACTORY, LTD., USA"
      },
      {
        "code": "HDGC",
        "description": "HIGH DESERT GOLF CART"
      },
      {
        "code": "JHGS",
        "description": "JH GLOBAL SERVICES, INC."
      },
      {
        "code": "KRKM",
        "description": "KIRKHAM MOTORSPORTS"
      },
      {
        "code": "LLMO",
        "description": "LECTRIC LIMOS "
      },
      {
        "code": "PVCO",
        "description": "PIVCO"
      },
      {
        "code": "STLM",
        "description": "STEALTH MANUFACTURING, LLC "
      },
      {
        "code": "ZONE",
        "description": "ZONE ELECTRIC CAR, LLC"
      },
      {
        "code": "WHGO",
        "description": "WHEEGO ELECTRIC CARS"
      },
      {
        "code": "BERO",
        "description": "BERTONE"
      },
      {
        "code": "BESA",
        "description": "BESASIE AUTOMOBILE CO., INC."
      },
      {
        "code": "BITT",
        "description": "BITTER"
      },
      {
        "code": "BIZZ",
        "description": "BIZZARRINI"
      },
      {
        "code": "BMC",
        "description": "B M C"
      },
      {
        "code": "BMW",
        "description": "BMW"
      },
      {
        "code": "BNTM",
        "description": "BANTAM"
      },
      {
        "code": "BOBB",
        "description": "BOBBI-KAR"
      },
      {
        "code": "BOCA",
        "description": "BOCAR"
      },
      {
        "code": "BOND",
        "description": "BOND"
      },
      {
        "code": "BORG",
        "description": "BORGWARD"
      },
      {
        "code": "BRAS",
        "description": "BRASINCA"
      },
      {
        "code": "BRDL",
        "description": "BRADLEY"
      },
      {
        "code": "BREM",
        "description": "BREMEN SPORT EQUIPMENT, INC. (BREMEN, IN)"
      },
      {
        "code": "BRIC",
        "description": "BRICKLIN"
      },
      {
        "code": "BRIS",
        "description": "BRISTOL"
      },
      {
        "code": "BRSH",
        "description": "BRUSH"
      },
      {
        "code": "BUGA",
        "description": "BUGATTI"
      },
      {
        "code": "BUIC",
        "description": "BUICK"
      },
      {
        "code": "BUTT",
        "description": "BUTTERFIELD MUSKETEER"
      },
      {
        "code": "BZEL",
        "description": "B AND Z ELECTRIC CAR CO."
      },
      {
        "code": "CADI",
        "description": "CADILLAC"
      },
      {
        "code": "CAP",
        "description": "CAPRI"
      },
      {
        "code": "CCMV",
        "description": "CROSS COUNTRY MILITARY VEHICLES"
      },
      {
        "code": "CHAI",
        "description": "CHAIKA"
      },
      {
        "code": "CHEC",
        "description": "CHECKER"
      },
      {
        "code": "CHEV",
        "description": "CHEVROLET"
      },
      {
        "code": "CHIN",
        "description": "CHING-KAN-SHAN"
      },
      {
        "code": "CHRY",
        "description": "CHRYSLER"
      },
      {
        "code": "CISI",
        "description": "CISITALIA"
      },
      {
        "code": "CITI",
        "description": "CITICAR"
      },
      {
        "code": "CITR",
        "description": "CITROEN"
      },
      {
        "code": "CLAC",
        "description": "CLASSIC ROADSTERS, LTD."
      },
      {
        "code": "CLAI",
        "description": "CLASSIC MOTOR CARRIAGES, INC."
      },
      {
        "code": "CLEN",
        "description": "CLENET COACH WORKS"
      },
      {
        "code": "CLUA",
        "description": "CLUA"
      },
      {
        "code": "COBR",
        "description": "AC COBRA"
      },
      {
        "code": "COCP",
        "description": "CONCEPTOR INDUSTRIES INC"
      },
      {
        "code": "COMV",
        "description": "COMMUTER VEHICLES, INC."
      },
      {
        "code": "CONN",
        "description": "CONNAUGHT"
      },
      {
        "code": "CONS",
        "description": "CONTESSA"
      },
      {
        "code": "CONU",
        "description": "CONSULIER"
      },
      {
        "code": "COOP",
        "description": "COOPER"
      },
      {
        "code": "CORD",
        "description": "CORD"
      },
      {
        "code": "CRBN",
        "description": "CORBIN MOTORS"
      },
      {
        "code": "CROF",
        "description": "CROFTON"
      },
      {
        "code": "CROS",
        "description": "CROSLEY"
      },
      {
        "code": "CUBS",
        "description": "CUBSTER"
      },
      {
        "code": "CUNN",
        "description": "CUNNIGHAM"
      },
      {
        "code": "DAEW",
        "description": "DAEWOO"
      },
      {
        "code": "DAF",
        "description": "DAF"
      },
      {
        "code": "DAIH",
        "description": "DAIHATSU"
      },
      {
        "code": "DAIM",
        "description": "DAIMLER"
      },
      {
        "code": "DAIN",
        "description": "D AND A VEHICLES, INC."
      },
      {
        "code": "DATS",
        "description": "DATSUN"
      },
      {
        "code": "DAVI",
        "description": "DAVIS"
      },
      {
        "code": "DAYO",
        "description": "DAYTONA"
      },
      {
        "code": "DB",
        "description": "D.B."
      },
      {
        "code": "DEBO",
        "description": "DEBONAIR"
      },
      {
        "code": "DECO",
        "description": "DECOURVILLE"
      },
      {
        "code": "DEEP",
        "description": "DEEP SANDERSON"
      },
      {
        "code": "DELL",
        "description": "DELLOW"
      },
      {
        "code": "DELO",
        "description": "DE LOREAN"
      },
      {
        "code": "DENZ",
        "description": "DENZEL"
      },
      {
        "code": "DESO",
        "description": "DESOTO"
      },
      {
        "code": "DETO",
        "description": "DETOMASO"
      },
      {
        "code": "DITE",
        "description": "DI TELLA"
      },
      {
        "code": "DIVA",
        "description": "DIVA"
      },
      {
        "code": "DKW",
        "description": "DKW"
      },
      {
        "code": "DLHY",
        "description": "DELAHAYE"
      },
      {
        "code": "DODG",
        "description": "DODGE"
      },
      {
        "code": "DONG",
        "description": "DONG"
      },
      {
        "code": "DUEL",
        "description": "DUEL"
      },
      {
        "code": "DUES",
        "description": "DUESENBERG"
      },
      {
        "code": "DURA",
        "description": "DURANT"
      },
      {
        "code": "E10",
        "description": "EB110"
      },
      {
        "code": "EDSE",
        "description": "EDSEL"
      },
      {
        "code": "EGIL",
        "description": "EAGLE"
      },
      {
        "code": "ELVA",
        "description": "ELVA"
      },
      {
        "code": "ELVC",
        "description": "ELECTRIC VEHICLE CORP."
      },
      {
        "code": "EMW",
        "description": "EMW"
      },
      {
        "code": "ENCR",
        "description": "ENCORE"
      },
      {
        "code": "ENGF",
        "description": "ENGLISH FORD"
      },
      {
        "code": "ENVY",
        "description": "ENVOY"
      },
      {
        "code": "ENZM",
        "description": "ENZMANN"
      },
      {
        "code": "ERSK",
        "description": "ERSKINE"
      },
      {
        "code": "ESHL",
        "description": "ESHELMAN SPORTABOUT"
      },
      {
        "code": "ESSE",
        "description": "ESSEX"
      },
      {
        "code": "EVRY",
        "description": "EVERYBODY'S MOTOR CAR MFG"
      },
      {
        "code": "EXCL",
        "description": "EXCALIBUR"
      },
      {
        "code": "FACE",
        "description": "FACEL-VEGA"
      },
      {
        "code": "FACL",
        "description": "FACELLIA"
      },
      {
        "code": "FAIR",
        "description": "FAIRTHORPE"
      },
      {
        "code": "FALC",
        "description": "FALCON"
      },
      {
        "code": "FELB",
        "description": "FELBER"
      },
      {
        "code": "FERR",
        "description": "FERRARI"
      },
      {
        "code": "FIAA",
        "description": "FIAT-ABARTH"
      },
      {
        "code": "FIAT",
        "description": "FIAT"
      },
      {
        "code": "FIBE",
        "description": "FIBERFAB, INC."
      },
      {
        "code": "FIST",
        "description": "FIESTA"
      },
      {
        "code": "FLEE",
        "description": "FLEETCRAFT CORP."
      },
      {
        "code": "FNM",
        "description": "FNM"
      },
      {
        "code": "FORD",
        "description": "FORD"
      },
      {
        "code": "FRAN",
        "description": "FRANKLIN"
      },
      {
        "code": "FRAZ",
        "description": "FRAZIER"
      },
      {
        "code": "FREF",
        "description": "FRENCH FORD"
      },
      {
        "code": "FRHT",
        "description": "FREIGHTLINER CORP."
      },
      {
        "code": "FRIS",
        "description": "FRISKY"
      },
      {
        "code": "FRNA",
        "description": "FRAZER-NASH"
      },
      {
        "code": "GAZ",
        "description": "GAZ"
      },
      {
        "code": "GEO",
        "description": "GEO"
      },
      {
        "code": "GIAN",
        "description": "GIANNINI"
      },
      {
        "code": "GILB",
        "description": "GILBERN"
      },
      {
        "code": "GINE",
        "description": "GINETTA"
      },
      {
        "code": "GITA",
        "description": "GITANE"
      },
      {
        "code": "GLAS",
        "description": "GLASSIC"
      },
      {
        "code": "GLSC",
        "description": "GLASSIC"
      },
      {
        "code": "GMC",
        "description": "GENERAL MOTOR CORP."
      },
      {
        "code": "GOLI",
        "description": "GOLIATH"
      },
      {
        "code": "GORD",
        "description": "GORDON"
      },
      {
        "code": "GRAC",
        "description": "GRACIELA"
      },
      {
        "code": "GRAH",
        "description": "GRAHAM"
      },
      {
        "code": "GRAP",
        "description": "GRAHAM-PAIGE"
      },
      {
        "code": "GRIF",
        "description": "GRIFFITH"
      },
      {
        "code": "GSM",
        "description": "GSM"
      },
      {
        "code": "HD",
        "description": "HARLEY-DAVIDSON"
      },
      {
        "code": "HEIN",
        "description": "HEINKEL"
      },
      {
        "code": "HENR",
        "description": "HENRY J."
      },
      {
        "code": "HICK",
        "description": "HICKEY TRAIL-BLAZER"
      },
      {
        "code": "HILL",
        "description": "HILLMAN"
      },
      {
        "code": "HIND",
        "description": "HINDUSTAN"
      },
      {
        "code": "HINO",
        "description": "HINO"
      },
      {
        "code": "HODA",
        "description": "HODAKA"
      },
      {
        "code": "HOLD",
        "description": "HOLDEN"
      },
      {
        "code": "HOND",
        "description": "HONDA"
      },
      {
        "code": "HONG",
        "description": "HONGKI OR HONG-CHI"
      },
      {
        "code": "HORC",
        "description": "HORCH LIMOUSINE"
      },
      {
        "code": "HOTC",
        "description": "HOTCHKISS"
      },
      {
        "code": "HRG",
        "description": "HRG"
      },
      {
        "code": "HUDS",
        "description": "HUDSON"
      },
      {
        "code": "HUMB",
        "description": "HUMBER"
      },
      {
        "code": "HUME",
        "description": "HUMBEE"
      },
      {
        "code": "HUPM",
        "description": "HUPMOBILE"
      },
      {
        "code": "HUSQ",
        "description": "HUSQVARNA"
      },
      {
        "code": "HYUN",
        "description": "HYUNDAI"
      },
      {
        "code": "IAME",
        "description": "I. A. M. E."
      },
      {
        "code": "IKA",
        "description": "I. K. A."
      },
      {
        "code": "IMPB",
        "description": "I. M. P. (U.S.)"
      },
      {
        "code": "IMPE",
        "description": "IMPERIAL"
      },
      {
        "code": "INFI",
        "description": "INFINITI"
      },
      {
        "code": "INME",
        "description": "INTERMECCANICA"
      },
      {
        "code": "INNO",
        "description": "INNOCENTI"
      },
      {
        "code": "INTL",
        "description": "INTERNATIONAL HARVESTER"
      },
      {
        "code": "ISET",
        "description": "ISETTA"
      },
      {
        "code": "ISO",
        "description": "ISO"
      },
      {
        "code": "ISU",
        "description": "ISUZU"
      },
      {
        "code": "ITAF",
        "description": "ITALIAN FORD"
      },
      {
        "code": "ITAI",
        "description": "ITALIA"
      },
      {
        "code": "JAGU",
        "description": "JAGUAR"
      },
      {
        "code": "JEEP",
        "description": "JEEP"
      },
      {
        "code": "JENS",
        "description": "JENSEN"
      },
      {
        "code": "JETM",
        "description": "JETMOBILE"
      },
      {
        "code": "JOWE",
        "description": "JOWETT"
      },
      {
        "code": "KAIS",
        "description": "KAISER"
      },
      {
        "code": "KAWK",
        "description": "KAWASAKI"
      },
      {
        "code": "KIA",
        "description": "KIA MOTOR CORPORATION"
      },
      {
        "code": "KIMI",
        "description": "KING MIDGET"
      },
      {
        "code": "KURT",
        "description": "KURTIS KRAFT"
      },
      {
        "code": "LADA",
        "description": "LADA"
      },
      {
        "code": "LAGO",
        "description": "LAGONDA"
      },
      {
        "code": "LALL",
        "description": "LASALLE"
      },
      {
        "code": "LAMO",
        "description": "LAMBORGHINI"
      },
      {
        "code": "LANC",
        "description": "LANCHESTER"
      },
      {
        "code": "LASE",
        "description": "LASER"
      },
      {
        "code": "LEAF",
        "description": "LEA-FRANCIS"
      },
      {
        "code": "LEXS",
        "description": "LEXUS"
      },
      {
        "code": "LINC",
        "description": "LINCOLN"
      },
      {
        "code": "LLOY",
        "description": "LLOYD"
      },
      {
        "code": "LNCI",
        "description": "LANCIA"
      },
      {
        "code": "LNDR",
        "description": "LAND ROVER"
      },
      {
        "code": "LOCO",
        "description": "LOCOMOBILE"
      },
      {
        "code": "LOLA",
        "description": "LOLA"
      },
      {
        "code": "LOND",
        "description": "LONDON MOTORS"
      },
      {
        "code": "LOOD",
        "description": "LOODCRAFT"
      },
      {
        "code": "LOTU",
        "description": "LOTUS"
      },
      {
        "code": "MARC",
        "description": "MARCOS"
      },
      {
        "code": "MARM",
        "description": "MARMON"
      },
      {
        "code": "MASE",
        "description": "MASERATI"
      },
      {
        "code": "MATA",
        "description": "MATRA"
      },
      {
        "code": "MAXL",
        "description": "MAXWELL"
      },
      {
        "code": "MAZD",
        "description": "MAZDA"
      },
      {
        "code": "MBCC",
        "description": "MCBURNIE COACH CRAFT, INC."
      },
      {
        "code": "MBM",
        "description": "M.B.M."
      },
      {
        "code": "MDNA",
        "description": "MODENA"
      },
      {
        "code": "MEAN",
        "description": "MEAN"
      },
      {
        "code": "MERC",
        "description": "MERCURY"
      },
      {
        "code": "MERK",
        "description": "MERKUR"
      },
      {
        "code": "MERZ",
        "description": "MERCEDES-BENZ"
      },
      {
        "code": "MESS",
        "description": "MESSERSCHMITT"
      },
      {
        "code": "METE",
        "description": "METEOR (CANADIAN MERCURY)"
      },
      {
        "code": "METR",
        "description": "METROPOLITAN"
      },
      {
        "code": "MG",
        "description": "MG"
      },
      {
        "code": "MICC",
        "description": "MICRO CONCEPT CARS"
      },
      {
        "code": "MIKA",
        "description": "MIKASA"
      },
      {
        "code": "MIKR",
        "description": "MIKRUS"
      },
      {
        "code": "MIST",
        "description": "MISTRAL"
      },
      {
        "code": "MITS",
        "description": "MITSUBISHI"
      },
      {
        "code": "MODE",
        "description": "MODEL A AND MODEL T MOTOR CAR REPRODUCTION CORP."
      },
      {
        "code": "MONA",
        "description": "MONARCH"
      },
      {
        "code": "MORE",
        "description": "MORETTI"
      },
      {
        "code": "MORG",
        "description": "MORGAN"
      },
      {
        "code": "MORR",
        "description": "MORRIS"
      },
      {
        "code": "MOSK",
        "description": "MOSKOVITCH"
      },
      {
        "code": "MUNT",
        "description": "MUNTZ"
      },
      {
        "code": "MURE",
        "description": "MURENA"
      },
      {
        "code": "MZMA",
        "description": "MZMA"
      },
      {
        "code": "NAHE",
        "description": "NASH-HEALY"
      },
      {
        "code": "NARD",
        "description": "NARDI-DANESE"
      },
      {
        "code": "NASH",
        "description": "NASH"
      },
      {
        "code": "NECK",
        "description": "NECKAR"
      },
      {
        "code": "NISS",
        "description": "NISSAN"
      },
      {
        "code": "NSU",
        "description": "NSU"
      },
      {
        "code": "NSUF",
        "description": "NSU-FIAT"
      },
      {
        "code": "OAKL",
        "description": "OAKLAND"
      },
      {
        "code": "OGLE",
        "description": "OGLE"
      },
      {
        "code": "OHTA",
        "description": "OHTA"
      },
      {
        "code": "OLDS",
        "description": "OLDSMOBILE"
      },
      {
        "code": "OMEG",
        "description": "OMEGA (ITALIAN)"
      },
      {
        "code": "OPEL",
        "description": "OPEL"
      },
      {
        "code": "OPER",
        "description": "OPEN ROADSTERS OF TEXAS"
      },
      {
        "code": "OSCA",
        "description": "OSCA"
      },
      {
        "code": "OSI",
        "description": "OSI"
      },
      {
        "code": "OTOS",
        "description": "OTOSAN"
      },
      {
        "code": "OVER",
        "description": "OVERLAND"
      },
      {
        "code": "PACK",
        "description": "PACKARD"
      },
      {
        "code": "PALL",
        "description": "PALLISER"
      },
      {
        "code": "PANE",
        "description": "PANTHER WESTWINDS, LTD."
      },
      {
        "code": "PANH",
        "description": "PANHARD"
      },
      {
        "code": "PASS",
        "description": "PASSPORT"
      },
      {
        "code": "PEAC",
        "description": "PEACE"
      },
      {
        "code": "PEEL",
        "description": "PEEL"
      },
      {
        "code": "PEER",
        "description": "PEERLESS"
      },
      {
        "code": "PEGA",
        "description": "PEGASO"
      },
      {
        "code": "PENN",
        "description": "J.C. PENNEY"
      },
      {
        "code": "PEUG",
        "description": "PEUGEOT"
      },
      {
        "code": "PHOE",
        "description": "PHOENIX"
      },
      {
        "code": "PINI",
        "description": "PINIFARINA"
      },
      {
        "code": "PLAY",
        "description": "PLAYBOY"
      },
      {
        "code": "PLYM",
        "description": "PLYMOUTH"
      },
      {
        "code": "POIR",
        "description": "POIRIER"
      },
      {
        "code": "PONI",
        "description": "PONTIAC (CANADIAN)"
      },
      {
        "code": "PONT",
        "description": "PONTIAC"
      },
      {
        "code": "PORS",
        "description": "PORSCHE"
      },
      {
        "code": "PRAI",
        "description": "PRAIRIE SCHOONER"
      },
      {
        "code": "PRCA",
        "description": "PIERCE ARROW"
      },
      {
        "code": "PRMO",
        "description": "PRINCE MOTORS"
      },
      {
        "code": "PROG",
        "description": "PROGRESS"
      },
      {
        "code": "PTV",
        "description": "PTV"
      },
      {
        "code": "PUCH",
        "description": "PUCH"
      },
      {
        "code": "PUMM",
        "description": "PUMA"
      },
      {
        "code": "RAMB",
        "description": "RAMBLER"
      },
      {
        "code": "RAMS",
        "description": "RAMSES"
      },
      {
        "code": "RECO",
        "description": "RECONSTRUCTED"
      },
      {
        "code": "RELA",
        "description": "RELIANT"
      },
      {
        "code": "RENA",
        "description": "RENAULT"
      },
      {
        "code": "REO",
        "description": "REO"
      },
      {
        "code": "RILE",
        "description": "RILEY"
      },
      {
        "code": "RIND",
        "description": "RICH INDUSTRIES"
      },
      {
        "code": "ROCH",
        "description": "ROCHDALE"
      },
      {
        "code": "ROK",
        "description": "ROCKNE"
      },
      {
        "code": "ROL",
        "description": "ROLLS-ROYCE"
      },
      {
        "code": "ROOT",
        "description": "ROOTES"
      },
      {
        "code": "ROV",
        "description": "ROVER"
      },
      {
        "code": "RYCS",
        "description": "RYCSA"
      },
      {
        "code": "SAA",
        "description": "SAAB"
      },
      {
        "code": "SABR",
        "description": "SABRA"
      },
      {
        "code": "SATR",
        "description": "SATURN CORPORATION"
      },
      {
        "code": "SEAT",
        "description": "SEAT"
      },
      {
        "code": "SERA",
        "description": "SERA"
      },
      {
        "code": "SHEB",
        "description": "SHELBY AMERICAN"
      },
      {
        "code": "SIAT",
        "description": "SIATA"
      },
      {
        "code": "SILA",
        "description": "SILA AUTORETTA"
      },
      {
        "code": "SIM",
        "description": "SIMCA"
      },
      {
        "code": "SIN",
        "description": "SINGER"
      },
      {
        "code": "SKOD",
        "description": "SKODA"
      },
      {
        "code": "SOLE",
        "description": "SOLECTRIA"
      },
      {
        "code": "SOVA",
        "description": "SOVAM"
      },
      {
        "code": "STAN",
        "description": "STANDARD"
      },
      {
        "code": "STAR",
        "description": "STAR"
      },
      {
        "code": "STEY",
        "description": "STEYR-PUCH"
      },
      {
        "code": "STLG",
        "description": "STERLING"
      },
      {
        "code": "STRA",
        "description": "STRALE"
      },
      {
        "code": "STRN",
        "description": "SATURN"
      },
      {
        "code": "STU",
        "description": "STUDEBAKER"
      },
      {
        "code": "STUZ",
        "description": "STUTZ"
      },
      {
        "code": "SUBA",
        "description": "SUBARU"
      },
      {
        "code": "SUNB",
        "description": "SUNBEAM"
      },
      {
        "code": "SUPT",
        "description": "SUPER"
      },
      {
        "code": "SUZI",
        "description": "SUZUKI"
      },
      {
        "code": "SUZU",
        "description": "SUZULIGHT SU"
      },
      {
        "code": "SYRE",
        "description": "SYRENA"
      },
      {
        "code": "TAMA",
        "description": "TAMA"
      },
      {
        "code": "TATR",
        "description": "TATRA"
      },
      {
        "code": "TAUN",
        "description": "TAUNUS (GERMAN FORD)"
      },
      {
        "code": "TCHA",
        "description": "TCHAIKA"
      },
      {
        "code": "TJAA",
        "description": "TJAARDA"
      },
      {
        "code": "TORN",
        "description": "TORNADO (BRITISH)"
      },
      {
        "code": "TOYP",
        "description": "TOYOPET"
      },
      {
        "code": "TOYT",
        "description": "TOYOTA"
      },
      {
        "code": "TRAB",
        "description": "TRABANT"
      },
      {
        "code": "TRIU",
        "description": "TRIUMPH"
      },
      {
        "code": "TROJ",
        "description": "TROJAN"
      },
      {
        "code": "TRPE",
        "description": "TERRAPLANE"
      },
      {
        "code": "TRUM",
        "description": "TRIUMPH MOTOR CO."
      },
      {
        "code": "TUCK",
        "description": "TUCKER"
      },
      {
        "code": "TURN",
        "description": "TURNER"
      },
      {
        "code": "TVR",
        "description": "TVR"
      },
      {
        "code": "TZ",
        "description": "TZ"
      },
      {
        "code": "UNIC",
        "description": "UNICAR"
      },
      {
        "code": "UNIP",
        "description": "UNIPOWER"
      },
      {
        "code": "USEL",
        "description": "U.S. ELECTRICAR CORP."
      },
      {
        "code": "VACR",
        "description": "VECTOR AEROMOTIVE CORPORATION"
      },
      {
        "code": "VAL",
        "description": "VAL"
      },
      {
        "code": "VALK",
        "description": "VALKRIE"
      },
      {
        "code": "VANG",
        "description": "VANGUARD"
      },
      {
        "code": "VAUX",
        "description": "VAUXHALL"
      },
      {
        "code": "VERI",
        "description": "VERITAS"
      },
      {
        "code": "VESP",
        "description": "VESPA"
      },
      {
        "code": "VNDN",
        "description": "VANDEN"
      },
      {
        "code": "VOGA",
        "description": "VOLGA"
      },
      {
        "code": "VOLK",
        "description": "VOLKSWAGEN"
      },
      {
        "code": "VOLV",
        "description": "VOLVO"
      },
      {
        "code": "WARS",
        "description": "WARSZAWA"
      },
      {
        "code": "WART",
        "description": "WARTBURG"
      },
      {
        "code": "WARW",
        "description": "WARWICK"
      },
      {
        "code": "WATF",
        "description": "WATFORD"
      },
      {
        "code": "WEND",
        "description": "WENDAX"
      },
      {
        "code": "WHIP",
        "description": "WHIPPET"
      },
      {
        "code": "WHIT",
        "description": "WHITE MOTOR CORP."
      },
      {
        "code": "WILS",
        "description": "WILSON"
      },
      {
        "code": "WLLS",
        "description": "WILLYS"
      },
      {
        "code": "WOLS",
        "description": "WOLSELEY"
      },
      {
        "code": "WOOD",
        "description": "WOODILL WILDFIRE"
      },
      {
        "code": "WORT",
        "description": "WORTHINGTON CHAMP"
      },
      {
        "code": "YAMA",
        "description": "YAMAHA"
      },
      {
        "code": "YENK",
        "description": "YENKO"
      },
      {
        "code": "YLN",
        "description": "YLN (YUE LOONG MOTOR CO.)"
      },
      {
        "code": "ZAPO",
        "description": "ZAPOROZHETS"
      },
      {
        "code": "ZARC",
        "description": "ZAR"
      },
      {
        "code": "ZCZY",
        "description": "ZASTAVIA (ZCZ-YUGOSLAVIA)"
      },
      {
        "code": "ZETA",
        "description": "ZETA"
      },
      {
        "code": "ZIL",
        "description": "ZIL"
      },
      {
        "code": "ZIM",
        "description": "ZIM"
      },
      {
        "code": "ZIMR",
        "description": "ZIMMERMAN AUTOMOBILES"
      },
      {
        "code": "ZUND",
        "description": "ZUNDAPP"
      },
      {
        "code": "ZWIC",
        "description": "ZWICKAU"
      },
      {
        "code": "ABAR",
        "description": "ABARTH"
      },
      {
        "code": "AC",
        "description": "A C (GREAT BRITIAN)"
      },
      {
        "code": "ACAD",
        "description": "ACADIAN (GM OF CANADA)"
      },
      {
        "code": "ACUR",
        "description": "ACURA"
      },
      {
        "code": "ADET",
        "description": "ADETTE"
      },
      {
        "code": "AERA",
        "description": "AEROCAR"
      },
      {
        "code": "AERO",
        "description": "AIRCRAFT"
      },
      {
        "code": "AETA",
        "description": "AETA"
      },
      {
        "code": "ALFA",
        "description": "ALFA ROMEO"
      },
      {
        "code": "ALLA",
        "description": "ALLARD"
      },
      {
        "code": "ALLF",
        "description": "ALLISON'S FIBERGLASS MFG.,INC."
      },
      {
        "code": "ALLS",
        "description": "ALL STATE"
      },
      {
        "code": "ALMA",
        "description": "ALMA"
      },
      {
        "code": "ALPI",
        "description": "ALPHINE"
      },
      {
        "code": "ALTA",
        "description": "ALTA"
      },
      {
        "code": "ALVI",
        "description": "ALVIS"
      },
      {
        "code": "AMER",
        "description": "AMERICAN"
      },
      {
        "code": "AMPH",
        "description": "AMPHICAR"
      },
      {
        "code": "ARGO",
        "description": "ARGONAUT STATE LIMOUSINE"
      },
      {
        "code": "ARIT",
        "description": "ARISTA"
      },
      {
        "code": "ARMS",
        "description": "ARMSTRONG SIDDELEY"
      },
      {
        "code": "ARNO",
        "description": "ARNOLT-BRISTOL"
      },
      {
        "code": "ARSC",
        "description": "ASCORT"
      },
      {
        "code": "ASA",
        "description": "ASA"
      },
      {
        "code": "ASHL",
        "description": "ASHLEY"
      },
      {
        "code": "ASTO",
        "description": "ASTON-MARTIN"
      },
      {
        "code": "ASUN",
        "description": "ASUNA"
      },
      {
        "code": "ASVE",
        "description": "ASSEMBLED VEHICLE"
      },
      {
        "code": "AUBU",
        "description": "AUBURN"
      },
      {
        "code": "AUDI",
        "description": "AUDI"
      },
      {
        "code": "AUHE",
        "description": "AUSTIN-HEALY"
      },
      {
        "code": "AUKR",
        "description": "AUTOKRAFT"
      },
      {
        "code": "AURR",
        "description": "AURORA"
      },
      {
        "code": "AUST",
        "description": "AUSTIN"
      },
      {
        "code": "AUTA",
        "description": "AUTOBIANCHI"
      },
      {
        "code": "AUTB",
        "description": "AUTOBIEU"
      },
      {
        "code": "AUTO",
        "description": "AUTOCAR"
      },
      {
        "code": "AUTR",
        "description": "AUTOCARRIER AND A.C."
      },
      {
        "code": "AUTU",
        "description": "AUTO UNION"
      },
      {
        "code": "AVEN",
        "description": "AVENGER"
      },
      {
        "code": "AVIA",
        "description": "AVIA"
      },
      {
        "code": "AVTI",
        "description": "AVANTI"
      },
      {
        "code": "BAC",
        "description": "BACI"
      },
      {
        "code": "BEAD",
        "description": "BEARDMORE"
      },
      {
        "code": "BEDF",
        "description": "BEDFORD"
      },
      {
        "code": "BENT",
        "description": "BENTLEY"
      },
      {
        "code": "BERG",
        "description": "BERGANTINE"
      },
      {
        "code": "BERK",
        "description": "BERKLEY"
      },
      {
        "code": "TRLR",
        "description": "TRLR TRAILER"
      },
      {
        "code": "WINN",
        "description": "WINNEBAGO INDUSTRIES, INC."
      },
      {
        "code": "HUMM",
        "description": "HUMMER"
      },
      {
        "code": "HOME",
        "description": "HOMETTE CORP/ALY ALLIANCE"
      },
      {
        "code": "ADLR",
        "description": "ADLER"
      },
      {
        "code": "ALCI",
        "description": "ALLEN COACHWORKS"
      },
      {
        "code": "BEJE",
        "description": "BEIJING JEEP"
      },
      {
        "code": "CREL",
        "description": "CORBIN ELECTRIC"
      },
      {
        "code": "DORT",
        "description": "DORT MOTOR CAR COMPANY"
      },
      {
        "code": "ENGN",
        "description": "ENGINE"
      },
      {
        "code": "GLBL",
        "description": "GLOBAL ELECTRIC MOTOR CARS"
      },
      {
        "code": "GZL",
        "description": "GAZELLE"
      },
      {
        "code": "KISS",
        "description": "KISSEL MOTOR CAR COMPANY OR KISSEL INDUSTRIES"
      },
      {
        "code": "LFZA",
        "description": "LAFORZAUTILTY VEHCILE"
      },
      {
        "code": "PANZ",
        "description": "PANOZ AUTO DEVELOPMENT CO."
      },
      {
        "code": "SANG",
        "description": "SANGYONG"
      },
      {
        "code": "SCIO",
        "description": "SCION"
      },
      {
        "code": "SIRC",
        "description": "SUN INTERNATIONAL RACING CORPORATION"
      },
      {
        "code": "VEAM",
        "description": "VEHICULOS AUTOMORES MEXICANO S.A. DE C.V."
      },
      {
        "code": "CAT",
        "description": "CATERPILLAR TRACTOR CO."
      },
      {
        "code": "GFST",
        "description": "GULF STREAM"
      },
      {
        "code": "KW",
        "description": "KENWORTH MOTOR TRUCK CO. DIV. OF PACCAR"
      },
      {
        "code": "MACK",
        "description": "MACK TRUCKS"
      },
      {
        "code": "MNNI",
        "description": "MINI"
      },
      {
        "code": "NAVI",
        "description": "NAVISTAR"
      },
      {
        "code": "PTRB",
        "description": "PETERBILT MOTORS CO. DIV. OF PACCAR"
      },
      {
        "code": "WHGM",
        "description": "WHITE GMC"
      },
      {
        "code": "SNOW",
        "description": "SNOWMOBILES"
      },
      {
        "code": "SPEC",
        "description": "SPECIALIZED VEHICLE"
      },
      {
        "code": "USA",
        "description": "U.S. ARMY VEHICLE"
      },
      {
        "code": "USAF",
        "description": "U.S. AIRFORCE VEHICLE"
      },
      {
        "code": "USCG",
        "description": "U.S. COAST GUARD"
      },
      {
        "code": "USMC",
        "description": "U.S. MARINE CORPS"
      },
      {
        "code": "USN",
        "description": "U.S. NAVY"
      },
      {
        "code": "ATV",
        "description": "ALL-TERRAIN VEHICLE"
      },
      {
        "code": "AMGN",
        "description": "AM GENERAL CORP."
      },
      {
        "code": "TRMN",
        "description": "TRANSMISSION"
      },
      {
        "code": "CHUC",
        "description": "CHUCK BECK MOTORSPORTS"
      },
      {
        "code": "LNDN",
        "description": "LONDON TAXI"
      },
      {
        "code": "LONC",
        "description": "LONE STAR CLASSICS"
      },
      {
        "code": "BCGC",
        "description": "BUDGET CUSTOM GOLF CARS, LLC"
      },
      {
        "code": "CATE",
        "description": "CATERHAM CAR SALES AND COACH WORKS"
      },
      {
        "code": "CLUB",
        "description": "CLUB CAR, INC.(NEV-NEIGHBORHOOD ELECTRIC VEHICLE)"
      },
      {
        "code": "EVNS",
        "description": "EVANS AUTOMOBILES"
      },
      {
        "code": "GNTY",
        "description": "GENTRY MOTORWORKS OF INDIANA, LLC"
      },
      {
        "code": "HITA",
        "description": "HI-TECH AUTOMOTIVE LTD."
      },
      {
        "code": "KNXX",
        "description": "KNOX AUTOMOBILE COMPANY"
      },
      {
        "code": "MIEV",
        "description": "MILES ELECTRIC VEHICLES"
      },
      {
        "code": "RUFF",
        "description": "RUFF AND TUFF ELECTRIC VEHICLES, INC."
      },
      {
        "code": "SPIR",
        "description": "SPIRIT CARS, LLC"
      },
      {
        "code": "EEVM",
        "description": "SUZHOU EAGLE ELECTRIC VEHICLE MFG. CO."
      },
      {
        "code": "TESL",
        "description": "TESLA MOTORS"
      },
      {
        "code": "MASP",
        "description": "MAS RACING PRODUCTS"
      },
      {
        "code": "MAYB",
        "description": "MAYBACH"
      },
      {
        "code": "RUFA",
        "description": "RUF AUTOMOBILES OF AMERICA"
      },
      {
        "code": "QYEV",
        "description": "TIANJIN-QINGYUAN ELECTRIC VEHICLE CO., LTD."
      },
      {
        "code": "ZAPP",
        "description": "ZAP"
      },
      {
        "code": "ERID",
        "description": "E-RIDE INDUSTRIES(ELECTRIC VEHICLES)"
      },
      {
        "code": "INSM",
        "description": "INNOVATIVE STREET MACHINES, LLC"
      },
      {
        "code": "TOMB",
        "description": "TOMBERLIN AUTOMOTIVE GROUP(ELECTRIC VEHICLES)"
      },
      {
        "code": "ZENN",
        "description": "ZENN MOTOR CO., LTD."
      },
      {
        "code": "DELG",
        "description": "DELAGE"
      },
      {
        "code": "ENVO",
        "description": "ENVEMO"
      },
      {
        "code": "ROSN",
        "description": "ROSSION/ROSSION AUTOMOTIVE"
      },
      {
        "code": "SCMT",
        "description": "SEARCHMONT AUTOMOBILE CO OR SEARCHMONT MOTOR CO."
      },
      {
        "code": "ULGC",
        "description": "ULTRA GOLF CART, INC. (LOW-SPEED VEHICLES)"
      },
      {
        "code": "OREI",
        "description": "OREION MOTOR, LLC (LOW-SPEED VEHICLES)"
      },
      {
        "code": "GRNG",
        "description": "GREENGO TEK, LLC (LOW-SPEED VEHICLES)"
      },
      {
        "code": "AARC",
        "description": "ALL AMERICAN RACERS"
      },
      {
        "code": "GCIN",
        "description": "G C INC / G C AUTO AND FLEET (LOW-SPEED VEHICLE)"
      },
      {
        "code": "ACGC",
        "description": "AMERICAN CUSTOM ELECTRIC CARS AND GOLF CARTS"
      },
      {
        "code": "AAVH",
        "description": "AREMT ARMORED VEHICLES"
      },
      {
        "code": "CLND",
        "description": "CROSS LANDER"
      },
      {
        "code": "DYEC",
        "description": "DYNASTY ELECTRIC CAR CORP."
      },
      {
        "code": "RNMT",
        "description": "RENAISSANCE MOTORS"
      },
      {
        "code": "SMRT",
        "description": "SMART"
      },
      {
        "code": "SPMC",
        "description": "SPEEDSTER MOTORCARS"
      },
      {
        "code": "SECI",
        "description": "STAR ELECTRIC CARS"
      },
      {
        "code": "TLCC",
        "description": "TLC CARROSSIERS"
      },
      {
        "code": "TOTL",
        "description": "TOTAL PERFORMANCE, INC."
      },
      {
        "code": "WSTN",
        "description": "WESTERN(NEV) NEIGHBORHOOD ELECTRIC VEHICLES"
      },
      {
        "code": "EVNI",
        "description": "ELECTRIC VEHICLES NORTHWEST, INC."
      },
      {
        "code": "ATTR",
        "description": "ADVANCED TRANSPORTATION TECHNOLOGY R AND D CO."
      },
      {
        "code": "BYDA",
        "description": "BYD AUTO CO., LTD."
      },
      {
        "code": "ERRA",
        "description": "ERA REPLICA AUTOMOBILES"
      },
      {
        "code": "GKUM",
        "description": "GKU MANUFACTURING, LLC"
      },
      {
        "code": "KITC",
        "description": "KIT CAR CENTRE (PTY), LTD."
      },
      {
        "code": "MCIT",
        "description": "MCINTYRE MOTOR WAGON, W.H. MCINTYRE, OR MCINTYRE"
      },
      {
        "code": "MILB",
        "description": "MILBURN WAGON COMPANY"
      },
      {
        "code": "NMVC",
        "description": "NATIONAL MOTOR VEHICLE CO."
      },
      {
        "code": "RAM",
        "description": "RAM"
      },
      {
        "code": "SCCO",
        "description": "SECO, INC."
      },
      {
        "code": "SPTX",
        "description": "SPORTSMOBILE TEXAS, INC."
      },
      {
        "code": "ULTS",
        "description": "ULTIMA SPORTS LIMITED"
      },
      {
        "code": "WNCH",
        "description": "WINCHESTER AUTOMOBILES OR WINCHESTER TAXI"
      },
      {
        "code": "AACC",
        "description": "AMERICAN AUSTIN CAR COMPANY"
      },
      {
        "code": "AVRA",
        "description": "AVERA MOTORS, INC."
      },
      {
        "code": "AZUR",
        "description": "AZURE DYNAMICS"
      },
      {
        "code": "BLOT",
        "description": "BALLOT"
      },
      {
        "code": "BIRK",
        "description": "BIRKIN CARS (PTY), LTD."
      },
      {
        "code": "BOYL",
        "description": "BOYLON SALES, INC."
      },
      {
        "code": "BCKM",
        "description": "BUCKMOBILE CO. OR THE BUCMOBLIE CO."
      },
      {
        "code": "CHRE",
        "description": "CHERY AUTOMOBILE CO., LTD."
      },
      {
        "code": "CODA",
        "description": "CODA AUTOMOTIVE, INC."
      },
      {
        "code": "CTTU",
        "description": "CT AND T AMERICA, INC."
      },
      {
        "code": "GRET",
        "description": "GREENTECH AUTOMOTIVE, INC."
      },
      {
        "code": "JMAR",
        "description": "JOMAR"
      },
      {
        "code": "MCLA",
        "description": "MCLAREN AUTOMOTIVE"
      },
      {
        "code": "THNK",
        "description": "THINK NORTH AMERICA, INC."
      },
      {
        "code": "TRTE",
        "description": "TR-TEC (PTY), LTD."
      },
      {
        "code": "VALE",
        "description": "VALE MOTOR COMPANY OR VALE"
      },
      {
        "code": "VHPG",
        "description": "VEHICLE PRODUCTION GROUP, LLC"
      }
    ];
    vehicles.models = [
      {
        "make": "MAZD",
        "code": "626",
        "fulldescription": "MAZDA 626",
        "description": "626"
      },
      {
        "make": "MAZD",
        "code": "808",
        "fulldescription": "MAZDA 808",
        "description": "808"
      },
      {
        "make": "MAZD",
        "code": "929",
        "fulldescription": "MAZDA 929",
        "description": "929"
      },
      {
        "make": "MAZD",
        "code": "MX3",
        "fulldescription": "MAZDA MX3",
        "description": "MX3"
      },
      {
        "make": "MAZD",
        "code": "MX6",
        "fulldescription": "MAZDA MX6",
        "description": "MX6"
      },
      {
        "make": "MAZD",
        "code": "RX2",
        "fulldescription": "MAZDA RX2",
        "description": "RX2"
      },
      {
        "make": "MAZD",
        "code": "RX3",
        "fulldescription": "MAZDA RX3",
        "description": "RX3"
      },
      {
        "make": "MAZD",
        "code": "RX4",
        "fulldescription": "MAZDA RX4",
        "description": "RX4"
      },
      {
        "make": "MAZD",
        "code": "RX7",
        "fulldescription": "MAZDA RX7",
        "description": "RX7"
      },
      {
        "make": "MAZD",
        "code": "CSM",
        "fulldescription": "MAZDA COSMO",
        "description": "COSMO"
      },
      {
        "make": "MAZD",
        "code": "PRO",
        "fulldescription": "MAZDA FAMILIA",
        "description": "FAMILIA"
      },
      {
        "make": "MAZD",
        "code": "GLC",
        "fulldescription": "MAZDA GLC",
        "description": "GLC"
      },
      {
        "make": "MAZD",
        "code": "MIA",
        "fulldescription": "MAZDA MERLOT MICA (MIATA)",
        "description": "MERLOT MICA (MIATA)"
      },
      {
        "make": "MAZD",
        "code": "MIL",
        "fulldescription": "MAZDA MILLENIA",
        "description": "MILLENIA"
      },
      {
        "make": "MAZD",
        "code": "MIS",
        "fulldescription": "MAZDA MISER",
        "description": "MISER"
      },
      {
        "make": "MAZD",
        "code": "TK",
        "fulldescription": "MAZDA TRUCK (MPV, NAVAJO, SPORT TRUCK)",
        "description": "TRUCK (MPV, NAVAJO, SPORT TRUCK)"
      },
      {
        "make": "MAZD",
        "code": "ZZZ",
        "fulldescription": "MAZDA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MERC",
        "code": "LN7",
        "fulldescription": "MERCURY LN7",
        "description": "LN7"
      },
      {
        "make": "MERC",
        "code": "S22",
        "fulldescription": "MERCURY S-22",
        "description": "S-22"
      },
      {
        "make": "MERC",
        "code": "S33",
        "fulldescription": "MERCURY S-33",
        "description": "S-33"
      },
      {
        "make": "MERC",
        "code": "S55",
        "fulldescription": "MERCURY S-55",
        "description": "S-55"
      },
      {
        "make": "MERC",
        "code": "BOB",
        "fulldescription": "MERCURY BOBCAT",
        "description": "BOBCAT"
      },
      {
        "make": "MERC",
        "code": "BRE",
        "fulldescription": "MERCURY BREEZEWAY",
        "description": "BREEZEWAY"
      },
      {
        "make": "MERC",
        "code": "BRO",
        "fulldescription": "MERCURY BROUGHAM",
        "description": "BROUGHAM"
      },
      {
        "make": "MERC",
        "code": "CLI",
        "fulldescription": "MERCURY CALIENTE",
        "description": "CALIENTE"
      },
      {
        "make": "MERC",
        "code": "CAP",
        "fulldescription": "MERCURY CAPRI",
        "description": "CAPRI"
      },
      {
        "make": "MERC",
        "code": "COL",
        "fulldescription": "MERCURY COLONY PARK",
        "description": "COLONY PARK"
      },
      {
        "make": "MERC",
        "code": "COM",
        "fulldescription": "MERCURY COMET",
        "description": "COMET"
      },
      {
        "make": "MERC",
        "code": "CMM",
        "fulldescription": "MERCURY COMMUTER",
        "description": "COMMUTER"
      },
      {
        "make": "MERC",
        "code": "COU",
        "fulldescription": "MERCURY COUGAR",
        "description": "COUGAR"
      },
      {
        "make": "MERC",
        "code": "CCR",
        "fulldescription": "MERCURY COUNTRY CRUISER",
        "description": "COUNTRY CRUISER"
      },
      {
        "make": "MERC",
        "code": "CUS",
        "fulldescription": "MERCURY CUSTOM",
        "description": "CUSTOM"
      },
      {
        "make": "MERC",
        "code": "CYC",
        "fulldescription": "MERCURY CYCLONE",
        "description": "CYCLONE"
      },
      {
        "make": "MERC",
        "code": "LYN",
        "fulldescription": "MERCURY LYNX",
        "description": "LYNX"
      },
      {
        "make": "MERC",
        "code": "MAR",
        "fulldescription": "MERCURY MARQUIS",
        "description": "MARQUIS"
      },
      {
        "make": "MERC",
        "code": "MAU",
        "fulldescription": "MERCURY MARAUDER",
        "description": "MARAUDER"
      },
      {
        "make": "MERC",
        "code": "MED",
        "fulldescription": "MERCURY MEDALIST",
        "description": "MEDALIST"
      },
      {
        "make": "MERC",
        "code": "MNH",
        "fulldescription": "MERCURY MONARCH",
        "description": "MONARCH"
      },
      {
        "make": "MERC",
        "code": "MOT",
        "fulldescription": "MERCURY MONTCLAIR",
        "description": "MONTCLAIR"
      },
      {
        "make": "MERC",
        "code": "MGO",
        "fulldescription": "MERCURY MONTEGO",
        "description": "MONTEGO"
      },
      {
        "make": "MERC",
        "code": "MON",
        "fulldescription": "MERCURY MONTEREY",
        "description": "MONTEREY"
      },
      {
        "make": "MERC",
        "code": "MYS",
        "fulldescription": "MERCURY MYSTIQUE",
        "description": "MYSTIQUE"
      },
      {
        "make": "MERC",
        "code": "TK",
        "fulldescription": "MERCURY VILLAGER, MINIVAN",
        "description": "VILLAGER, MINIVAN"
      },
      {
        "make": "MERC",
        "code": "PAR",
        "fulldescription": "MERCURY PARKLANE",
        "description": "PARKLANE"
      },
      {
        "make": "MERC",
        "code": "SAB",
        "fulldescription": "MERCURY SABLE",
        "description": "SABLE"
      },
      {
        "make": "MERC",
        "code": "TOP",
        "fulldescription": "MERCURY TOPAZ",
        "description": "TOPAZ"
      },
      {
        "make": "MERC",
        "code": "TRA",
        "fulldescription": "MERCURY TRACER",
        "description": "TRACER"
      },
      {
        "make": "MERC",
        "code": "TUR",
        "fulldescription": "MERCURY TURNPIKE CRUISER",
        "description": "TURNPIKE CRUISER"
      },
      {
        "make": "MERC",
        "code": "VIL",
        "fulldescription": "MERCURY VILLAGER",
        "description": "VILLAGER"
      },
      {
        "make": "MERC",
        "code": "VOY",
        "fulldescription": "MERCURY VOYAGER",
        "description": "VOYAGER"
      },
      {
        "make": "MERC",
        "code": "ZEP",
        "fulldescription": "MERCURY ZEPHYR",
        "description": "ZEPHYR"
      },
      {
        "make": "HD",
        "code": "ZZZ",
        "fulldescription": "HARLEY-DAVIDSON MOTORCYCLE",
        "description": "MOTORCYCLE"
      },
      {
        "make": "KAWK",
        "code": "ZZZ",
        "fulldescription": "KAWASAKI MOTORCYCLE",
        "description": "MOTORCYCLE"
      },
      {
        "make": "ABAR",
        "code": "ZZZ",
        "fulldescription": "ABARTH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AC",
        "code": "300",
        "fulldescription": "A C (GREAT BRITIAN) 3000 ME",
        "description": "3000 ME"
      },
      {
        "make": "ACAD",
        "code": "BEA",
        "fulldescription": "ACADIAN (GM OF CANADA) BEAUMONT SERIES",
        "description": "BEAUMONT SERIES"
      },
      {
        "make": "ACAD",
        "code": "CAN",
        "fulldescription": "ACADIAN (GM OF CANADA) CANSO SERIES",
        "description": "CANSO SERIES"
      },
      {
        "make": "ACAD",
        "code": "INV",
        "fulldescription": "ACADIAN (GM OF CANADA) INVADER SERIES",
        "description": "INVADER SERIES"
      },
      {
        "make": "COBR",
        "code": "ZZZ",
        "fulldescription": "AC COBRA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ADET",
        "code": "ZZZ",
        "fulldescription": "ADETTE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AERA",
        "code": "ZZZ",
        "fulldescription": "AEROCAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AETA",
        "code": "ZZZ",
        "fulldescription": "AETA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AERO",
        "code": "ZZZ",
        "fulldescription": "AIRCRAFT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ALFA",
        "code": "164",
        "fulldescription": "ALFA ROMEO 164",
        "description": "164"
      },
      {
        "make": "ALFA",
        "code": "26S",
        "fulldescription": "ALFA ROMEO 2600 SPIDER",
        "description": "2600 SPIDER"
      },
      {
        "make": "ALFA",
        "code": "26P",
        "fulldescription": "ALFA ROMEO 2600 SPRINT",
        "description": "2600 SPRINT"
      },
      {
        "make": "ALFA",
        "code": "GT6",
        "fulldescription": "ALFA ROMEO ALFA GT6",
        "description": "ALFA GT6"
      },
      {
        "make": "ALFA",
        "code": "AGT",
        "fulldescription": "ALFA ROMEO ALFETTA GT",
        "description": "ALFETTA GT"
      },
      {
        "make": "ALFA",
        "code": "ARN",
        "fulldescription": "ALFA ROMEO ARNA",
        "description": "ARNA"
      },
      {
        "make": "ALFA",
        "code": "BER",
        "fulldescription": "ALFA ROMEO BERLINA",
        "description": "BERLINA"
      },
      {
        "make": "ALFA",
        "code": "DUE",
        "fulldescription": "ALFA ROMEO DUETTO",
        "description": "DUETTO"
      },
      {
        "make": "ALFA",
        "code": "GIU",
        "fulldescription": "ALFA ROMEO GIULIA",
        "description": "GIULIA"
      },
      {
        "make": "ALFA",
        "code": "GIS",
        "fulldescription": "ALFA ROMEO GIULIA SPIDER",
        "description": "GIULIA SPIDER"
      },
      {
        "make": "ALFA",
        "code": "GIP",
        "fulldescription": "ALFA ROMEO GIULIA SPRINT",
        "description": "GIULIA SPRINT"
      },
      {
        "make": "ALFA",
        "code": "GIT",
        "fulldescription": "ALFA ROMEO GIULIETTA",
        "description": "GIULIETTA"
      },
      {
        "make": "ALFA",
        "code": "GTV",
        "fulldescription": "ALFA ROMEO GT VELOCE",
        "description": "GT VELOCE"
      },
      {
        "make": "ALFA",
        "code": "G25",
        "fulldescription": "ALFA ROMEO GTV6 2.5",
        "description": "GTV6 2.5"
      },
      {
        "make": "ALFA",
        "code": "MIL",
        "fulldescription": "ALFA ROMEO MILANO",
        "description": "MILANO"
      },
      {
        "make": "ALFA",
        "code": "MON",
        "fulldescription": "ALFA ROMEO MONTREAL",
        "description": "MONTREAL"
      },
      {
        "make": "ALFA",
        "code": "SPI",
        "fulldescription": "ALFA ROMEO SPIDER SERIES",
        "description": "SPIDER SERIES"
      },
      {
        "make": "ALFA",
        "code": "ZAG",
        "fulldescription": "ALFA ROMEO ZAGATO",
        "description": "ZAGATO"
      },
      {
        "make": "ALLA",
        "code": "ZZZ",
        "fulldescription": "ALLARD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ALLF",
        "code": "ZZZ",
        "fulldescription": "ALLISON'S FIBERGLASS MFG.,INC. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ALLS",
        "code": "ZZZ",
        "fulldescription": "ALL STATE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ALMA",
        "code": "ZZZ",
        "fulldescription": "ALMA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ALPI",
        "code": "ZZZ",
        "fulldescription": "ALPHINE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ALTA",
        "code": "ZZZ",
        "fulldescription": "ALTA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ALVI",
        "code": "ZZZ",
        "fulldescription": "ALVIS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AMPH",
        "code": "ZZZ",
        "fulldescription": "AMPHICAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ARGO",
        "code": "ZZZ",
        "fulldescription": "ARGONAUT STATE LIMOUSINE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ARIT",
        "code": "ZZZ",
        "fulldescription": "ARISTA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ARMS",
        "code": "ZZZ",
        "fulldescription": "ARMSTRONG SIDDELEY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ARNO",
        "code": "ZZZ",
        "fulldescription": "ARNOLT-BRISTOL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ASA",
        "code": "ZZZ",
        "fulldescription": "ASA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ARSC",
        "code": "ZZZ",
        "fulldescription": "ASCORT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ASHL",
        "code": "ZZZ",
        "fulldescription": "ASHLEY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ASVE",
        "code": "ZZZ",
        "fulldescription": "ASSEMBLED VEHICLE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ASTO",
        "code": "DB5",
        "fulldescription": "ASTON-MARTIN DB-5",
        "description": "DB-5"
      },
      {
        "make": "ASTO",
        "code": "DB6",
        "fulldescription": "ASTON-MARTIN DB-6",
        "description": "DB-6"
      },
      {
        "make": "ASTO",
        "code": "LAG",
        "fulldescription": "ASTON-MARTIN LAGONDA",
        "description": "LAGONDA"
      },
      {
        "make": "ASTO",
        "code": "VAN",
        "fulldescription": "ASTON-MARTIN VANTAGE",
        "description": "VANTAGE"
      },
      {
        "make": "ASTO",
        "code": "VIR",
        "fulldescription": "ASTON-MARTIN VIRAGE (SALOON)",
        "description": "VIRAGE (SALOON)"
      },
      {
        "make": "ASTO",
        "code": "VOL",
        "fulldescription": "ASTON-MARTIN VOLANTE",
        "description": "VOLANTE"
      },
      {
        "make": "ASUN",
        "code": "GT",
        "fulldescription": "ASUNA GT",
        "description": "GT"
      },
      {
        "make": "ASUN",
        "code": "SE",
        "fulldescription": "ASUNA SE",
        "description": "SE"
      },
      {
        "make": "ASUN",
        "code": "SUF",
        "fulldescription": "ASUNA SUNFIRE",
        "description": "SUNFIRE"
      },
      {
        "make": "ASUN",
        "code": "SUR",
        "fulldescription": "ASUNA SUNRUNNER",
        "description": "SUNRUNNER"
      },
      {
        "make": "AUBU",
        "code": "ZZZ",
        "fulldescription": "AUBURN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AURR",
        "code": "ZZZ",
        "fulldescription": "AURORA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AUST",
        "code": "850",
        "fulldescription": "AUSTIN 850",
        "description": "850"
      },
      {
        "make": "AUST",
        "code": "110",
        "fulldescription": "AUSTIN 1100",
        "description": "1100"
      },
      {
        "make": "AUST",
        "code": "180",
        "fulldescription": "AUSTIN 1800",
        "description": "1800"
      },
      {
        "make": "AUST",
        "code": "A40",
        "fulldescription": "AUSTIN A40",
        "description": "A40"
      },
      {
        "make": "AUST",
        "code": "A55",
        "fulldescription": "AUSTIN A55",
        "description": "A55"
      },
      {
        "make": "AUST",
        "code": "A10",
        "fulldescription": "AUSTIN A99 AND 110",
        "description": "A99 AND 110"
      },
      {
        "make": "AUST",
        "code": "A60",
        "fulldescription": "AUSTIN CAMBRIDGE",
        "description": "CAMBRIDGE"
      },
      {
        "make": "AUST",
        "code": "CPS",
        "fulldescription": "AUSTIN COOPER \"S\"",
        "description": "COOPER \"S\""
      },
      {
        "make": "AUST",
        "code": "MAR",
        "fulldescription": "AUSTIN MARINA",
        "description": "MARINA"
      },
      {
        "make": "AUST",
        "code": "MIN",
        "fulldescription": "AUSTIN MINI",
        "description": "MINI"
      },
      {
        "make": "AUST",
        "code": "MIC",
        "fulldescription": "AUSTIN MINI COOPER",
        "description": "MINI COOPER"
      },
      {
        "make": "AUST",
        "code": "4R",
        "fulldescription": "AUSTIN PRINCESS",
        "description": "PRINCESS"
      },
      {
        "make": "AUST",
        "code": "WES",
        "fulldescription": "AUSTIN WESTMINSTER",
        "description": "WESTMINSTER"
      },
      {
        "make": "AUHE",
        "code": "100",
        "fulldescription": "AUSTIN-HEALY 100 SERIES",
        "description": "100 SERIES"
      },
      {
        "make": "AUHE",
        "code": "300",
        "fulldescription": "AUSTIN-HEALY 3000 SERIES",
        "description": "3000 SERIES"
      },
      {
        "make": "AUHE",
        "code": "SPR",
        "fulldescription": "AUSTIN-HEALY SPRITE",
        "description": "SPRITE"
      },
      {
        "make": "AUTA",
        "code": "ZZZ",
        "fulldescription": "AUTOBIANCHI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AUTB",
        "code": "ZZZ",
        "fulldescription": "AUTOBIEU UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AUTO",
        "code": "ZZZ",
        "fulldescription": "AUTOCAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AUTR",
        "code": "ZZZ",
        "fulldescription": "AUTOCARRIER AND A.C. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AUKR",
        "code": "ZZZ",
        "fulldescription": "AUTOKRAFT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AUTU",
        "code": "ZZZ",
        "fulldescription": "AUTO UNION UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AVTI",
        "code": "AAV",
        "fulldescription": "AVANTI SERIES A",
        "description": "SERIES A"
      },
      {
        "make": "AVTI",
        "code": "ABV",
        "fulldescription": "AVANTI SERIES B",
        "description": "SERIES B"
      },
      {
        "make": "AVEN",
        "code": "ZZZ",
        "fulldescription": "AVENGER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AVIA",
        "code": "ZZZ",
        "fulldescription": "AVIA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BNTM",
        "code": "ZZZ",
        "fulldescription": "BANTAM UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BEAD",
        "code": "ZZZ",
        "fulldescription": "BEARDMORE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BEDF",
        "code": "ZZZ",
        "fulldescription": "BEDFORD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BESA",
        "code": "ZZZ",
        "fulldescription": "BESASI AUTOMOBILE CO., INC.",
        "description": "BESASI AUTOMOBILE CO., INC."
      },
      {
        "make": "BAC",
        "code": "ZZZ",
        "fulldescription": "BACI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BENT",
        "code": "AZU",
        "fulldescription": "BENTLEY ASURE",
        "description": "ASURE"
      },
      {
        "make": "BENT",
        "code": "BRO",
        "fulldescription": "BENTLEY BROOKLANDS",
        "description": "BROOKLANDS"
      },
      {
        "make": "BENT",
        "code": "CON",
        "fulldescription": "BENTLEY CONTINENTAL CONVERTIBLE",
        "description": "CONTINENTAL CONVERTIBLE"
      },
      {
        "make": "BENT",
        "code": "COR",
        "fulldescription": "BENTLEY CORNICHE",
        "description": "CORNICHE"
      },
      {
        "make": "BENT",
        "code": "EGT",
        "fulldescription": "BENTLEY EIGHT",
        "description": "EIGHT"
      },
      {
        "make": "BENT",
        "code": "MUL",
        "fulldescription": "BENTLEY MULSANNE",
        "description": "MULSANNE"
      },
      {
        "make": "BENT",
        "code": "TBR",
        "fulldescription": "BENTLEY TURBO R",
        "description": "TURBO R"
      },
      {
        "make": "BERG",
        "code": "ZZZ",
        "fulldescription": "BERGANTINE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BERK",
        "code": "ZZZ",
        "fulldescription": "BERKLEY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BERO",
        "code": "CAB",
        "fulldescription": "BERTONE CABRIO",
        "description": "CABRIO"
      },
      {
        "make": "BERO",
        "code": "PAL",
        "fulldescription": "BERTONE PALINURO",
        "description": "PALINURO"
      },
      {
        "make": "BERO",
        "code": "X19",
        "fulldescription": "BERTONE X19",
        "description": "X19"
      },
      {
        "make": "BITT",
        "code": "ZZZ",
        "fulldescription": "BITTER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BIZZ",
        "code": "ZZZ",
        "fulldescription": "BIZZARRINI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BMC",
        "code": "PRI",
        "fulldescription": "B M C PRINCESS",
        "description": "PRINCESS"
      },
      {
        "make": "BOBB",
        "code": "ZZZ",
        "fulldescription": "BOBBI-KAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BOCA",
        "code": "ZZZ",
        "fulldescription": "BOCAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BOND",
        "code": "ZZZ",
        "fulldescription": "BOND UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BORG",
        "code": "BEL",
        "fulldescription": "BORGWARD BEL AIR",
        "description": "BEL AIR"
      },
      {
        "make": "BORG",
        "code": "BER",
        "fulldescription": "BORGWARD BERETTA",
        "description": "BERETTA"
      },
      {
        "make": "BORG",
        "code": "BIS",
        "fulldescription": "BORGWARD BISCAYNE",
        "description": "BISCAYNE"
      },
      {
        "make": "BORG",
        "code": "HAN",
        "fulldescription": "BORGWARD HANSA",
        "description": "HANSA"
      },
      {
        "make": "BORG",
        "code": "ISA",
        "fulldescription": "BORGWARD ISABELLA",
        "description": "ISABELLA"
      },
      {
        "make": "BRDL",
        "code": "ZZZ",
        "fulldescription": "BRADLEY GT UNKNOWN",
        "description": "GT UNKNOWN"
      },
      {
        "make": "BRAS",
        "code": "ZZZ",
        "fulldescription": "BRASINCA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BREM",
        "code": "CRE",
        "fulldescription": "BREMEN SPORT EQUIPMENT, INC.(BREMEN, IN) CREIGHTON",
        "description": "CREIGHTON"
      },
      {
        "make": "BREM",
        "code": "LAU",
        "fulldescription": "BREMEN SPORT EQUIPMENT, INC.(BREMEN, IN) LAUFER",
        "description": "LAUFER"
      },
      {
        "make": "BREM",
        "code": "MAX",
        "fulldescription": "BREMEN SPORT EQUIPMENT, INC.(BREMEN, IN) MAXI-TAXI",
        "description": "MAXI-TAXI"
      },
      {
        "make": "BREM",
        "code": "MIN",
        "fulldescription": "BREMEN SPORT EQUIPMENT, INC.(BREMEN, IN) MINI-MARK",
        "description": "MINI-MARK"
      },
      {
        "make": "BREM",
        "code": "SEB",
        "fulldescription": "BREMEN SPORT EQUIPMENT, INC.(BREMEN, IN) SEBRING",
        "description": "SEBRING"
      },
      {
        "make": "BRIC",
        "code": "ZZZ",
        "fulldescription": "BRICKLIN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BRIS",
        "code": "ZZZ",
        "fulldescription": "BRISTOL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BUGA",
        "code": "ZZZ",
        "fulldescription": "BUGATTI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "E10",
        "code": "ZZZ",
        "fulldescription": "EB110 UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BUTT",
        "code": "ZZZ",
        "fulldescription": "BUTTERFIELD MUSKETEER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BZEL",
        "code": "ELE",
        "fulldescription": "B AND Z ELECTRIC CAR CO. ELECTRA-KING",
        "description": "ELECTRA-KING"
      },
      {
        "make": "CAP",
        "code": "ZZZ",
        "fulldescription": "CAPRI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CHAI",
        "code": "ZZZ",
        "fulldescription": "CHAIKA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CHEC",
        "code": "AER",
        "fulldescription": "CHECKER AEROBUS",
        "description": "AEROBUS"
      },
      {
        "make": "CHEC",
        "code": "CUS",
        "fulldescription": "CHECKER CUSTOM",
        "description": "CUSTOM"
      },
      {
        "make": "CHEC",
        "code": "MTH",
        "fulldescription": "CHECKER MARATHON",
        "description": "MARATHON"
      },
      {
        "make": "CHEC",
        "code": "SRB",
        "fulldescription": "CHECKER SUPERBA",
        "description": "SUPERBA"
      },
      {
        "make": "CHIN",
        "code": "ZZZ",
        "fulldescription": "CHING-KAN-SHAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CISI",
        "code": "ZZZ",
        "fulldescription": "CISITALIA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CITI",
        "code": "ZZZ",
        "fulldescription": "CITICAR (ELECTRIC CAR) UNKNOWN",
        "description": "(ELECTRIC CAR) UNKNOWN"
      },
      {
        "make": "CITR",
        "code": "2CV",
        "fulldescription": "CITROEN 2CV",
        "description": "2CV"
      },
      {
        "make": "CITR",
        "code": "AM6",
        "fulldescription": "CITROEN AM16",
        "description": "AM16"
      },
      {
        "make": "CITR",
        "code": "AX",
        "fulldescription": "CITROEN AX",
        "description": "AX"
      },
      {
        "make": "CITR",
        "code": "D19",
        "fulldescription": "CITROEN DS-19",
        "description": "DS-19"
      },
      {
        "make": "CITR",
        "code": "D21",
        "fulldescription": "CITROEN DS-21 AND D21",
        "description": "DS-21 AND D21"
      },
      {
        "make": "CITR",
        "code": "ID9",
        "fulldescription": "CITROEN ID-19",
        "description": "ID-19"
      },
      {
        "make": "CITR",
        "code": "SM",
        "fulldescription": "CITROEN SM",
        "description": "SM"
      },
      {
        "make": "YAMA",
        "code": "CYL",
        "fulldescription": "YAMAHA (JAPAN)  MOTORCYCLE",
        "description": "(JAPAN)  MOTORCYCLE"
      },
      {
        "make": "VOLV",
        "code": "122",
        "fulldescription": "VOLVO 122 SERIES",
        "description": "122 SERIES"
      },
      {
        "make": "VOLV",
        "code": "140",
        "fulldescription": "VOLVO 140 SERIES",
        "description": "140 SERIES"
      },
      {
        "make": "VOLV",
        "code": "164",
        "fulldescription": "VOLVO 164 SERIES",
        "description": "164 SERIES"
      },
      {
        "make": "VOLV",
        "code": "200",
        "fulldescription": "VOLVO 200 SERIES",
        "description": "200 SERIES"
      },
      {
        "make": "VOLV",
        "code": "240",
        "fulldescription": "VOLVO 240 SERIES",
        "description": "240 SERIES"
      },
      {
        "make": "VOLV",
        "code": "245",
        "fulldescription": "VOLVO 245 SERIES",
        "description": "245 SERIES"
      },
      {
        "make": "VOLV",
        "code": "260",
        "fulldescription": "VOLVO 260 SERIES",
        "description": "260 SERIES"
      },
      {
        "make": "VOLV",
        "code": "740",
        "fulldescription": "VOLVO 740 SERIES",
        "description": "740 SERIES"
      },
      {
        "make": "VOLV",
        "code": "745",
        "fulldescription": "VOLVO 745 SERIES",
        "description": "745 SERIES"
      },
      {
        "make": "VOLV",
        "code": "760",
        "fulldescription": "VOLVO 760",
        "description": "760"
      },
      {
        "make": "VOLV",
        "code": "765",
        "fulldescription": "VOLVO 765 SERIES",
        "description": "765 SERIES"
      },
      {
        "make": "VOLV",
        "code": "780",
        "fulldescription": "VOLVO 780 SERIES",
        "description": "780 SERIES"
      },
      {
        "make": "VOLV",
        "code": "850",
        "fulldescription": "VOLVO 850 SERIES",
        "description": "850 SERIES"
      },
      {
        "make": "VOLV",
        "code": "940",
        "fulldescription": "VOLVO 940",
        "description": "940"
      },
      {
        "make": "VOLV",
        "code": "960",
        "fulldescription": "VOLVO 960",
        "description": "960"
      },
      {
        "make": "VOLV",
        "code": "180",
        "fulldescription": "VOLVO 1800 SERIES",
        "description": "1800 SERIES"
      },
      {
        "make": "VOLV",
        "code": "190",
        "fulldescription": "VOLVO P1900",
        "description": "P1900"
      },
      {
        "make": "VOLV",
        "code": "444",
        "fulldescription": "VOLVO PV444",
        "description": "PV444"
      },
      {
        "make": "VOLV",
        "code": "544",
        "fulldescription": "VOLVO PV544",
        "description": "PV544"
      },
      {
        "make": "VOLV",
        "code": "COB",
        "fulldescription": "VOLVO COMBI",
        "description": "COMBI"
      },
      {
        "make": "VOLV",
        "code": "SPO",
        "fulldescription": "VOLVO SPORT",
        "description": "SPORT"
      },
      {
        "make": "VOLV",
        "code": "DL",
        "fulldescription": "VOLVO DL",
        "description": "DL"
      },
      {
        "make": "VOLV",
        "code": "GL",
        "fulldescription": "VOLVO GL",
        "description": "GL"
      },
      {
        "make": "VOLV",
        "code": "GLE",
        "fulldescription": "VOLVO GLE",
        "description": "GLE"
      },
      {
        "make": "VOLV",
        "code": "GLT",
        "fulldescription": "VOLVO GLT",
        "description": "GLT"
      },
      {
        "make": "VOLK",
        "code": "113",
        "fulldescription": "VOLKSWAGEN 113",
        "description": "113"
      },
      {
        "make": "VOLK",
        "code": "412",
        "fulldescription": "VOLKSWAGEN 411/412",
        "description": "411/412"
      },
      {
        "make": "VOLK",
        "code": "120",
        "fulldescription": "VOLKSWAGEN 1200",
        "description": "1200"
      },
      {
        "make": "VOLK",
        "code": "130",
        "fulldescription": "VOLKSWAGEN 1300",
        "description": "1300"
      },
      {
        "make": "VOLK",
        "code": "150",
        "fulldescription": "VOLKSWAGEN 1500",
        "description": "1500"
      },
      {
        "make": "VOLK",
        "code": "BUG",
        "fulldescription": "VOLKSWAGEN BEETLE (SUPER BEETLE OR BUG)",
        "description": "BEETLE (SUPER BEETLE OR BUG)"
      },
      {
        "make": "VOLK",
        "code": "CAB",
        "fulldescription": "VOLKSWAGEN CABRIOLET",
        "description": "CABRIOLET"
      },
      {
        "make": "VOLK",
        "code": "COR",
        "fulldescription": "VOLKSWAGEN CORRADO",
        "description": "CORRADO"
      },
      {
        "make": "VOLK",
        "code": "DAS",
        "fulldescription": "VOLKSWAGEN DASHER",
        "description": "DASHER"
      },
      {
        "make": "VOLK",
        "code": "TK",
        "fulldescription": "VOLKSWAGEN TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "VOLK",
        "code": "FB",
        "fulldescription": "VOLKSWAGEN FASTBACK",
        "description": "FASTBACK"
      },
      {
        "make": "VOLK",
        "code": "FOX",
        "fulldescription": "VOLKSWAGEN FOX",
        "description": "FOX"
      },
      {
        "make": "VOLK",
        "code": "GTI",
        "fulldescription": "VOLKSWAGEN GTI",
        "description": "GTI"
      },
      {
        "make": "VOLK",
        "code": "GOL",
        "fulldescription": "VOLKSWAGEN GOLF R",
        "description": "GOLF R"
      },
      {
        "make": "VOLK",
        "code": "JET",
        "fulldescription": "VOLKSWAGEN JETTA",
        "description": "JETTA"
      },
      {
        "make": "VOLK",
        "code": "KAR",
        "fulldescription": "VOLKSWAGEN KARMANN GHIA",
        "description": "KARMANN GHIA"
      },
      {
        "make": "VOLK",
        "code": "PAS",
        "fulldescription": "VOLKSWAGEN PASSAT",
        "description": "PASSAT"
      },
      {
        "make": "VOLK",
        "code": "POL",
        "fulldescription": "VOLKSWAGEN POLO",
        "description": "POLO"
      },
      {
        "make": "VOLK",
        "code": "QTM",
        "fulldescription": "VOLKSWAGEN QUANTUM",
        "description": "QUANTUM"
      },
      {
        "make": "VOLK",
        "code": "RAB",
        "fulldescription": "VOLKSWAGEN RABBIT",
        "description": "RABBIT"
      },
      {
        "make": "VOLK",
        "code": "SCI",
        "fulldescription": "VOLKSWAGEN SCIROCCO",
        "description": "SCIROCCO"
      },
      {
        "make": "VOLK",
        "code": "SB",
        "fulldescription": "VOLKSWAGEN SQUAREBACK",
        "description": "SQUAREBACK"
      },
      {
        "make": "VOLK",
        "code": "SUR",
        "fulldescription": "VOLKSWAGEN SUNROOF",
        "description": "SUNROOF"
      },
      {
        "make": "VOLK",
        "code": "THI",
        "fulldescription": "VOLKSWAGEN THE THING",
        "description": "THE THING"
      },
      {
        "make": "VOLK",
        "code": "VAR",
        "fulldescription": "VOLKSWAGEN VARIANT",
        "description": "VARIANT"
      },
      {
        "make": "TOYT",
        "code": "TK",
        "fulldescription": "TOYOTA TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "TOYT",
        "code": "AVA",
        "fulldescription": "TOYOTA AVALON",
        "description": "AVALON"
      },
      {
        "make": "TOYT",
        "code": "CAM",
        "fulldescription": "TOYOTA CAMRY",
        "description": "CAMRY"
      },
      {
        "make": "TOYT",
        "code": "CAR",
        "fulldescription": "TOYOTA CARINA",
        "description": "CARINA"
      },
      {
        "make": "TOYT",
        "code": "CST",
        "fulldescription": "TOYOTA CELICA",
        "description": "CELICA"
      },
      {
        "make": "TOYT",
        "code": "COA",
        "fulldescription": "TOYOTA COROLLA",
        "description": "COROLLA"
      },
      {
        "make": "TOYT",
        "code": "COR",
        "fulldescription": "TOYOTA CORONA",
        "description": "CORONA"
      },
      {
        "make": "TOYT",
        "code": "CRE",
        "fulldescription": "TOYOTA CRESSIDA",
        "description": "CRESSIDA"
      },
      {
        "make": "TOYT",
        "code": "CRO",
        "fulldescription": "TOYOTA CROWN",
        "description": "CROWN"
      },
      {
        "make": "TOYT",
        "code": "MII",
        "fulldescription": "TOYOTA MARK II",
        "description": "MARK II"
      },
      {
        "make": "TOYT",
        "code": "MR2",
        "fulldescription": "TOYOTA MR2",
        "description": "MR2"
      },
      {
        "make": "TOYT",
        "code": "PAS",
        "fulldescription": "TOYOTA PASEO",
        "description": "PASEO"
      },
      {
        "make": "TOYT",
        "code": "STA",
        "fulldescription": "TOYOTA STARLET",
        "description": "STARLET"
      },
      {
        "make": "TOYT",
        "code": "SUP",
        "fulldescription": "TOYOTA SUPRA",
        "description": "SUPRA"
      },
      {
        "make": "TOYT",
        "code": "TER",
        "fulldescription": "TOYOTA TERCEL",
        "description": "TERCEL"
      },
      {
        "make": "SUZI",
        "code": "FOR",
        "fulldescription": "SUZUKI FORSA",
        "description": "FORSA"
      },
      {
        "make": "SUZI",
        "code": "TK",
        "fulldescription": "SUZUKI TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "SUZI",
        "code": "SFT",
        "fulldescription": "SUZUKI SWIFT",
        "description": "SWIFT"
      },
      {
        "make": "SUBA",
        "code": "100",
        "fulldescription": "SUBARU 100 SERIES",
        "description": "100 SERIES"
      },
      {
        "make": "SUBA",
        "code": "110",
        "fulldescription": "SUBARU 1100 SERIES",
        "description": "1100 SERIES"
      },
      {
        "make": "SUBA",
        "code": "130",
        "fulldescription": "SUBARU 1300 SERIES",
        "description": "1300 SERIES"
      },
      {
        "make": "SUBA",
        "code": "140",
        "fulldescription": "SUBARU 1400 SERIES",
        "description": "1400 SERIES"
      },
      {
        "make": "SUBA",
        "code": "160",
        "fulldescription": "SUBARU 1600 SERIES",
        "description": "1600 SERIES"
      },
      {
        "make": "SUBA",
        "code": "DL",
        "fulldescription": "SUBARU DL",
        "description": "DL"
      },
      {
        "make": "SUBA",
        "code": "FE2",
        "fulldescription": "SUBARU FE",
        "description": "FE"
      },
      {
        "make": "SUBA",
        "code": "GL",
        "fulldescription": "SUBARU GL",
        "description": "GL"
      },
      {
        "make": "SUBA",
        "code": "GLF",
        "fulldescription": "SUBARU GLF",
        "description": "GLF"
      },
      {
        "make": "SUBA",
        "code": "IMP",
        "fulldescription": "SUBARU IMPREZA",
        "description": "IMPREZA"
      },
      {
        "make": "SUBA",
        "code": "JUS",
        "fulldescription": "SUBARU JUSTY",
        "description": "JUSTY"
      },
      {
        "make": "SUBA",
        "code": "LEG",
        "fulldescription": "SUBARU LEGACY",
        "description": "LEGACY"
      },
      {
        "make": "SUBA",
        "code": "LEO",
        "fulldescription": "SUBARU LEONE GL COUPE",
        "description": "LEONE GL COUPE"
      },
      {
        "make": "SUBA",
        "code": "RX",
        "fulldescription": "SUBARU RX",
        "description": "RX"
      },
      {
        "make": "SUBA",
        "code": "STA",
        "fulldescription": "SUBARU STANDARD",
        "description": "STANDARD"
      },
      {
        "make": "SUBA",
        "code": "SVX",
        "fulldescription": "SUBARU SVX",
        "description": "SVX"
      },
      {
        "make": "SUBA",
        "code": "XTC",
        "fulldescription": "SUBARU XT COUPE",
        "description": "XT COUPE"
      },
      {
        "make": "SUBA",
        "code": "XT6",
        "fulldescription": "SUBARU XT6",
        "description": "XT6"
      },
      {
        "make": "SUBA",
        "code": "LOY",
        "fulldescription": "SUBARU LOYALE",
        "description": "LOYALE"
      },
      {
        "make": "STRN",
        "code": "SC",
        "fulldescription": "SATURN  SC",
        "description": "SC"
      },
      {
        "make": "STRN",
        "code": "SL",
        "fulldescription": "SATURN  SL",
        "description": "SL"
      },
      {
        "make": "STRN",
        "code": "SW",
        "fulldescription": "SATURN  SW",
        "description": "SW"
      },
      {
        "make": "SAA",
        "code": "92",
        "fulldescription": "SAAB 92",
        "description": "92"
      },
      {
        "make": "SAA",
        "code": "93",
        "fulldescription": "SAAB 93 AND 93B",
        "description": "93 AND 93B"
      },
      {
        "make": "SAA",
        "code": "95",
        "fulldescription": "SAAB 95",
        "description": "95"
      },
      {
        "make": "SAA",
        "code": "96",
        "fulldescription": "SAAB 96",
        "description": "96"
      },
      {
        "make": "SAA",
        "code": "97",
        "fulldescription": "SAAB 97",
        "description": "97"
      },
      {
        "make": "SAA",
        "code": "99",
        "fulldescription": "SAAB 99",
        "description": "99"
      },
      {
        "make": "SAA",
        "code": "900",
        "fulldescription": "SAAB 900",
        "description": "900"
      },
      {
        "make": "SAA",
        "code": "90A",
        "fulldescription": "SAAB 9000",
        "description": "9000"
      },
      {
        "make": "SAA",
        "code": "G75",
        "fulldescription": "SAAB GT 750",
        "description": "GT 750"
      },
      {
        "make": "SAA",
        "code": "SON",
        "fulldescription": "SAAB SONNET",
        "description": "SONNET"
      },
      {
        "make": "RENA",
        "code": "18",
        "fulldescription": "RENAULT 18I",
        "description": "18I"
      },
      {
        "make": "RENA",
        "code": "750",
        "fulldescription": "RENAULT 750",
        "description": "750"
      },
      {
        "make": "RENA",
        "code": "R4",
        "fulldescription": "RENAULT R-4",
        "description": "R-4"
      },
      {
        "make": "RENA",
        "code": "R5",
        "fulldescription": "RENAULT R-5",
        "description": "R-5"
      },
      {
        "make": "RENA",
        "code": "R8",
        "fulldescription": "RENAULT R-8",
        "description": "R-8"
      },
      {
        "make": "RENA",
        "code": "R10",
        "fulldescription": "RENAULT R-10",
        "description": "R-10"
      },
      {
        "make": "RENA",
        "code": "R12",
        "fulldescription": "RENAULT R-12",
        "description": "R-12"
      },
      {
        "make": "RENA",
        "code": "R15",
        "fulldescription": "RENAULT R-15",
        "description": "R-15"
      },
      {
        "make": "RENA",
        "code": "R16",
        "fulldescription": "RENAULT R-16",
        "description": "R-16"
      },
      {
        "make": "RENA",
        "code": "R17",
        "fulldescription": "RENAULT R-17",
        "description": "R-17"
      },
      {
        "make": "RENA",
        "code": "ALI",
        "fulldescription": "RENAULT ALLIANCE",
        "description": "ALLIANCE"
      },
      {
        "make": "RENA",
        "code": "CRV",
        "fulldescription": "RENAULT CARAVELLE",
        "description": "CARAVELLE"
      },
      {
        "make": "RENA",
        "code": "DAU",
        "fulldescription": "RENAULT DAUPHINE",
        "description": "DAUPHINE"
      },
      {
        "make": "RENA",
        "code": "ENC",
        "fulldescription": "RENAULT ENCORE",
        "description": "ENCORE"
      },
      {
        "make": "RENA",
        "code": "EST",
        "fulldescription": "RENAULT ESTAFETTE",
        "description": "ESTAFETTE"
      },
      {
        "make": "RENA",
        "code": "EXP",
        "fulldescription": "RENAULT EXPORT",
        "description": "EXPORT"
      },
      {
        "make": "RENA",
        "code": "FGO",
        "fulldescription": "RENAULT FUEGO",
        "description": "FUEGO"
      },
      {
        "make": "RENA",
        "code": "GON",
        "fulldescription": "RENAULT GORDINI",
        "description": "GORDINI"
      },
      {
        "make": "RENA",
        "code": "LEC",
        "fulldescription": "RENAULT LE CAR",
        "description": "LE CAR"
      },
      {
        "make": "RENA",
        "code": "LX",
        "fulldescription": "RENAULT LUXE",
        "description": "LUXE"
      },
      {
        "make": "PORS",
        "code": "356",
        "fulldescription": "PORSCHE 356",
        "description": "356"
      },
      {
        "make": "PORS",
        "code": "911",
        "fulldescription": "PORSCHE 911",
        "description": "911"
      },
      {
        "make": "PORS",
        "code": "912",
        "fulldescription": "PORSCHE 912",
        "description": "912"
      },
      {
        "make": "PORS",
        "code": "914",
        "fulldescription": "PORSCHE 914",
        "description": "914"
      },
      {
        "make": "PORS",
        "code": "924",
        "fulldescription": "PORSCHE 924",
        "description": "924"
      },
      {
        "make": "PORS",
        "code": "928",
        "fulldescription": "PORSCHE 928",
        "description": "928"
      },
      {
        "make": "PORS",
        "code": "930",
        "fulldescription": "PORSCHE 930",
        "description": "930"
      },
      {
        "make": "PORS",
        "code": "944",
        "fulldescription": "PORSCHE 944",
        "description": "944"
      },
      {
        "make": "PORS",
        "code": "968",
        "fulldescription": "PORSCHE 968",
        "description": "968"
      },
      {
        "make": "PORS",
        "code": "130",
        "fulldescription": "PORSCHE 1300",
        "description": "1300"
      },
      {
        "make": "PORS",
        "code": "150",
        "fulldescription": "PORSCHE 1500",
        "description": "1500"
      },
      {
        "make": "PORS",
        "code": "160",
        "fulldescription": "PORSCHE 1600",
        "description": "1600"
      },
      {
        "make": "PORS",
        "code": "CAB",
        "fulldescription": "PORSCHE CABRIOLET",
        "description": "CABRIOLET"
      },
      {
        "make": "PORS",
        "code": "CAR",
        "fulldescription": "PORSCHE CARRERA",
        "description": "CARRERA"
      },
      {
        "make": "PORS",
        "code": "KAR",
        "fulldescription": "PORSCHE KARMAN",
        "description": "KARMAN"
      },
      {
        "make": "PORS",
        "code": "STA",
        "fulldescription": "PORSCHE STANDARD",
        "description": "STANDARD"
      },
      {
        "make": "PORS",
        "code": "SUP",
        "fulldescription": "PORSCHE SUPER",
        "description": "SUPER"
      },
      {
        "make": "PORS",
        "code": "TGA",
        "fulldescription": "PORSCHE TARGA",
        "description": "TARGA"
      },
      {
        "make": "PONT",
        "code": "2P2",
        "fulldescription": "PONTIAC 2+2",
        "description": "2+2"
      },
      {
        "make": "PONT",
        "code": "200",
        "fulldescription": "PONTIAC 2000",
        "description": "2000"
      },
      {
        "make": "PONT",
        "code": "600",
        "fulldescription": "PONTIAC 6000",
        "description": "6000"
      },
      {
        "make": "PONT",
        "code": "AST",
        "fulldescription": "PONTIAC ASTRE",
        "description": "ASTRE"
      },
      {
        "make": "PONT",
        "code": "BON",
        "fulldescription": "PONTIAC BONNEVILLE",
        "description": "BONNEVILLE"
      },
      {
        "make": "PONT",
        "code": "CAT",
        "fulldescription": "PONTIAC CATALINA",
        "description": "CATALINA"
      },
      {
        "make": "PONT",
        "code": "CHI",
        "fulldescription": "PONTIAC CHIEFTAIN",
        "description": "CHIEFTAIN"
      },
      {
        "make": "PONT",
        "code": "CUS",
        "fulldescription": "PONTIAC CUSTOM",
        "description": "CUSTOM"
      },
      {
        "make": "PONT",
        "code": "DEL",
        "fulldescription": "PONTIAC DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "PONT",
        "code": "EXE",
        "fulldescription": "PONTIAC EXECUTIVE",
        "description": "EXECUTIVE"
      },
      {
        "make": "PONT",
        "code": "FIE",
        "fulldescription": "PONTIAC FIERO",
        "description": "FIERO"
      },
      {
        "make": "PONT",
        "code": "FBD",
        "fulldescription": "PONTIAC FIREBIRD FIREHAWK TRANS AM",
        "description": "FIREBIRD FIREHAWK TRANS AM"
      },
      {
        "make": "PONT",
        "code": "GRM",
        "fulldescription": "PONTIAC GRAND AM",
        "description": "GRAND AM"
      },
      {
        "make": "PONT",
        "code": "GRA",
        "fulldescription": "PONTIAC GRAND PRIX",
        "description": "GRAND PRIX"
      },
      {
        "make": "PONT",
        "code": "GRD",
        "fulldescription": "PONTIAC GRAND VILLE",
        "description": "GRAND VILLE"
      },
      {
        "make": "PONT",
        "code": "GT0",
        "fulldescription": "PONTIAC GT0",
        "description": "GT0"
      },
      {
        "make": "PONT",
        "code": "J20",
        "fulldescription": "PONTIAC J2000",
        "description": "J2000"
      },
      {
        "make": "PONT",
        "code": "LEM",
        "fulldescription": "PONTIAC LEMANS",
        "description": "LEMANS"
      },
      {
        "make": "PONT",
        "code": "PAR",
        "fulldescription": "PONTIAC PARISIENNE",
        "description": "PARISIENNE"
      },
      {
        "make": "PONT",
        "code": "PHO",
        "fulldescription": "PONTIAC PHOENIX",
        "description": "PHOENIX"
      },
      {
        "make": "PONT",
        "code": "SKY",
        "fulldescription": "PONTIAC SKY CHIEF",
        "description": "SKY CHIEF"
      },
      {
        "make": "PONT",
        "code": "SSE",
        "fulldescription": "PONTIAC SSE",
        "description": "SSE"
      },
      {
        "make": "PONT",
        "code": "STA",
        "fulldescription": "PONTIAC STAR CHIEF",
        "description": "STAR CHIEF"
      },
      {
        "make": "PONT",
        "code": "STR",
        "fulldescription": "PONTIAC STREAMLINER",
        "description": "STREAMLINER"
      },
      {
        "make": "PONT",
        "code": "SUN",
        "fulldescription": "PONTIAC SUNBIRD",
        "description": "SUNBIRD"
      },
      {
        "make": "PONT",
        "code": "SNF",
        "fulldescription": "PONTIAC SUNFIRE",
        "description": "SUNFIRE"
      },
      {
        "make": "PONT",
        "code": "SUP",
        "fulldescription": "PONTIAC SUPER CHIEF",
        "description": "SUPER CHIEF"
      },
      {
        "make": "PONT",
        "code": "T10",
        "fulldescription": "PONTIAC T-1000",
        "description": "T-1000"
      },
      {
        "make": "PONT",
        "code": "TG0",
        "fulldescription": "PONTIAC TEMPEST GT0",
        "description": "TEMPEST GT0"
      },
      {
        "make": "PONT",
        "code": "TK",
        "fulldescription": "PONTIAC TRANS SPORT",
        "description": "TRANS SPORT"
      },
      {
        "make": "PONT",
        "code": "VEN",
        "fulldescription": "PONTIAC VENTURA",
        "description": "VENTURA"
      },
      {
        "make": "PONI",
        "code": "ZZZ",
        "fulldescription": "PONTIAC (CANADIAN) UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PLYM",
        "code": "ACC",
        "fulldescription": "PLYMOUTH ACCLAIM",
        "description": "ACCLAIM"
      },
      {
        "make": "PLYM",
        "code": "AOW",
        "fulldescription": "PLYMOUTH ARROW",
        "description": "ARROW"
      },
      {
        "make": "PLYM",
        "code": "BAR",
        "fulldescription": "PLYMOUTH BARRACUDA",
        "description": "BARRACUDA"
      },
      {
        "make": "PLYM",
        "code": "BEL",
        "fulldescription": "PLYMOUTH BELVEDERE",
        "description": "BELVEDERE"
      },
      {
        "make": "PLYM",
        "code": "BRZ",
        "fulldescription": "PLYMOUTH BREEZE",
        "description": "BREEZE"
      },
      {
        "make": "PLYM",
        "code": "CAM",
        "fulldescription": "PLYMOUTH CAMBRIDGE",
        "description": "CAMBRIDGE"
      },
      {
        "make": "PLYM",
        "code": "CRL",
        "fulldescription": "PLYMOUTH CARAVELLE",
        "description": "CARAVELLE"
      },
      {
        "make": "PLYM",
        "code": "CHA",
        "fulldescription": "PLYMOUTH CHAMP",
        "description": "CHAMP"
      },
      {
        "make": "PLYM",
        "code": "CLT",
        "fulldescription": "PLYMOUTH COLT",
        "description": "COLT"
      },
      {
        "make": "PLYM",
        "code": "COQ",
        "fulldescription": "PLYMOUTH CONQUEST",
        "description": "CONQUEST"
      },
      {
        "make": "PLYM",
        "code": "CRA",
        "fulldescription": "PLYMOUTH CRANBROOK",
        "description": "CRANBROOK"
      },
      {
        "make": "PLYM",
        "code": "DUS",
        "fulldescription": "PLYMOUTH DUSTER",
        "description": "DUSTER"
      },
      {
        "make": "PLYM",
        "code": "FUR",
        "fulldescription": "PLYMOUTH FURY (ALSO GRAN FURY)",
        "description": "FURY (ALSO GRAN FURY)"
      },
      {
        "make": "PLYM",
        "code": "GTX",
        "fulldescription": "PLYMOUTH GTX",
        "description": "GTX"
      },
      {
        "make": "PLYM",
        "code": "HOR",
        "fulldescription": "PLYMOUTH HORIZON (ALSO TC3)",
        "description": "HORIZON (ALSO TC3)"
      },
      {
        "make": "PLYM",
        "code": "LAS",
        "fulldescription": "PLYMOUTH LASER",
        "description": "LASER"
      },
      {
        "make": "PLYM",
        "code": "NEO",
        "fulldescription": "PLYMOUTH NEON",
        "description": "NEON"
      },
      {
        "make": "PLYM",
        "code": "PLA",
        "fulldescription": "PLYMOUTH PLAZA",
        "description": "PLAZA"
      },
      {
        "make": "PLYM",
        "code": "REL",
        "fulldescription": "PLYMOUTH RELIANT",
        "description": "RELIANT"
      },
      {
        "make": "PLYM",
        "code": "RRU",
        "fulldescription": "PLYMOUTH ROAD RUNNER",
        "description": "ROAD RUNNER"
      },
      {
        "make": "PLYM",
        "code": "SAP",
        "fulldescription": "PLYMOUTH SAPPORO",
        "description": "SAPPORO"
      },
      {
        "make": "PLYM",
        "code": "SAT",
        "fulldescription": "PLYMOUTH SATELLITE",
        "description": "SATELLITE"
      },
      {
        "make": "PLYM",
        "code": "SAV",
        "fulldescription": "PLYMOUTH SAVOY",
        "description": "SAVOY"
      },
      {
        "make": "PLYM",
        "code": "SCA",
        "fulldescription": "PLYMOUTH SCAMP (VALIANT)",
        "description": "SCAMP (VALIANT)"
      },
      {
        "make": "PLYM",
        "code": "SIG",
        "fulldescription": "PLYMOUTH SIGNET (VALIANT)",
        "description": "SIGNET (VALIANT)"
      },
      {
        "make": "PLYM",
        "code": "SUB",
        "fulldescription": "PLYMOUTH SUBURBAN",
        "description": "SUBURBAN"
      },
      {
        "make": "PLYM",
        "code": "SUN",
        "fulldescription": "PLYMOUTH SUNDANCE",
        "description": "SUNDANCE"
      },
      {
        "make": "PLYM",
        "code": "TK",
        "fulldescription": "PLYMOUTH TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "PLYM",
        "code": "TUR",
        "fulldescription": "PLYMOUTH TURISMO",
        "description": "TURISMO"
      },
      {
        "make": "PLYM",
        "code": "VAL",
        "fulldescription": "PLYMOUTH VALIANT",
        "description": "VALIANT"
      },
      {
        "make": "PLYM",
        "code": "VIP",
        "fulldescription": "PLYMOUTH VIP",
        "description": "VIP"
      },
      {
        "make": "PLYM",
        "code": "VOL",
        "fulldescription": "PLYMOUTH VOLARE",
        "description": "VOLARE"
      },
      {
        "make": "OLDS",
        "code": "442",
        "fulldescription": "OLDSMOBILE 4-4-2",
        "description": "4-4-2"
      },
      {
        "make": "OLDS",
        "code": "88",
        "fulldescription": "OLDSMOBILE 88",
        "description": "88"
      },
      {
        "make": "OLDS",
        "code": "98",
        "fulldescription": "OLDSMOBILE 98",
        "description": "98"
      },
      {
        "make": "OLDS",
        "code": "ACV",
        "fulldescription": "OLDSMOBILE ACHIEVA",
        "description": "ACHIEVA"
      },
      {
        "make": "OLDS",
        "code": "AUR",
        "fulldescription": "OLDSMOBILE AURORA",
        "description": "AURORA"
      },
      {
        "make": "OLDS",
        "code": "TK",
        "fulldescription": "OLDSMOBILE TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "OLDS",
        "code": "CAL",
        "fulldescription": "OLDSMOBILE CALAIS",
        "description": "CALAIS"
      },
      {
        "make": "OLDS",
        "code": "CRV",
        "fulldescription": "OLDSMOBILE CARAVAN",
        "description": "CARAVAN"
      },
      {
        "make": "OLDS",
        "code": "CUS",
        "fulldescription": "OLDSMOBILE CUSTOM",
        "description": "CUSTOM"
      },
      {
        "make": "OLDS",
        "code": "CCR",
        "fulldescription": "OLDSMOBILE CUSTOM CRUISER",
        "description": "CUSTOM CRUISER"
      },
      {
        "make": "OLDS",
        "code": "CUT",
        "fulldescription": "OLDSMOBILE CUTLASS/CIERA",
        "description": "CUTLASS/CIERA"
      },
      {
        "make": "OLDS",
        "code": "DLM",
        "fulldescription": "OLDSMOBILE DELMONT 88",
        "description": "DELMONT 88"
      },
      {
        "make": "OLDS",
        "code": "DLT",
        "fulldescription": "OLDSMOBILE DELTA 88/ ROYALE",
        "description": "DELTA 88/ ROYALE"
      },
      {
        "make": "OLDS",
        "code": "DEL",
        "fulldescription": "OLDSMOBILE DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "OLDS",
        "code": "DYN",
        "fulldescription": "OLDSMOBILE DYNAMIC 88",
        "description": "DYNAMIC 88"
      },
      {
        "make": "OLDS",
        "code": "FZA",
        "fulldescription": "OLDSMOBILE FIRENZA",
        "description": "FIRENZA"
      },
      {
        "make": "OLDS",
        "code": "F85",
        "fulldescription": "OLDSMOBILE F-85",
        "description": "F-85"
      },
      {
        "make": "OLDS",
        "code": "HOL",
        "fulldescription": "OLDSMOBILE HOLIDAY",
        "description": "HOLIDAY"
      },
      {
        "make": "OLDS",
        "code": "JTF",
        "fulldescription": "OLDSMOBILE JETFIRE",
        "description": "JETFIRE"
      },
      {
        "make": "OLDS",
        "code": "JTS",
        "fulldescription": "OLDSMOBILE JETSTAR",
        "description": "JETSTAR"
      },
      {
        "make": "OLDS",
        "code": "OME",
        "fulldescription": "OLDSMOBILE OMEGA",
        "description": "OMEGA"
      },
      {
        "make": "OLDS",
        "code": "REG",
        "fulldescription": "OLDSMOBILE REGENCY (NINETY-EIGHT SERIES)",
        "description": "REGENCY (NINETY-EIGHT SERIES)"
      },
      {
        "make": "OLDS",
        "code": "STD",
        "fulldescription": "OLDSMOBILE STANDARD",
        "description": "STANDARD"
      },
      {
        "make": "OLDS",
        "code": "STA",
        "fulldescription": "OLDSMOBILE STARFIRE",
        "description": "STARFIRE"
      },
      {
        "make": "OLDS",
        "code": "SUP",
        "fulldescription": "OLDSMOBILE SUPER 88",
        "description": "SUPER 88"
      },
      {
        "make": "OLDS",
        "code": "TOR",
        "fulldescription": "OLDSMOBILE TORONADO TROFEO",
        "description": "TORONADO TROFEO"
      },
      {
        "make": "OLDS",
        "code": "VIS",
        "fulldescription": "OLDSMOBILE VISTA CRUISER",
        "description": "VISTA CRUISER"
      },
      {
        "make": "NISS",
        "code": "200",
        "fulldescription": "NISSAN 200SX",
        "description": "200SX"
      },
      {
        "make": "NISS",
        "code": "240",
        "fulldescription": "NISSAN 240SX",
        "description": "240SX"
      },
      {
        "make": "NISS",
        "code": "300",
        "fulldescription": "NISSAN 300ZX",
        "description": "300ZX"
      },
      {
        "make": "NISS",
        "code": "ALT",
        "fulldescription": "NISSAN ALTIMA",
        "description": "ALTIMA"
      },
      {
        "make": "NISS",
        "code": "AXX",
        "fulldescription": "NISSAN AXXESS",
        "description": "AXXESS"
      },
      {
        "make": "NISS",
        "code": "MAX",
        "fulldescription": "NISSAN MAXIMA",
        "description": "MAXIMA"
      },
      {
        "make": "NISS",
        "code": "NX",
        "fulldescription": "NISSAN NX",
        "description": "NX"
      },
      {
        "make": "NISS",
        "code": "TK",
        "fulldescription": "NISSAN TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "NISS",
        "code": "PUL",
        "fulldescription": "NISSAN PULSAR",
        "description": "PULSAR"
      },
      {
        "make": "NISS",
        "code": "SEN",
        "fulldescription": "NISSAN SENTRA",
        "description": "SENTRA"
      },
      {
        "make": "NISS",
        "code": "STA",
        "fulldescription": "NISSAN STANZA",
        "description": "STANZA"
      },
      {
        "make": "MITS",
        "code": "3GT",
        "fulldescription": "MITSUBISHI 3000 GT",
        "description": "3000 GT"
      },
      {
        "make": "MITS",
        "code": "CHA",
        "fulldescription": "MITSUBISHI CHARIOT",
        "description": "CHARIOT"
      },
      {
        "make": "MITS",
        "code": "COR",
        "fulldescription": "MITSUBISHI CORDIA",
        "description": "CORDIA"
      },
      {
        "make": "MITS",
        "code": "DIA",
        "fulldescription": "MITSUBISHI DIAMANTE",
        "description": "DIAMANTE"
      },
      {
        "make": "MITS",
        "code": "ECL",
        "fulldescription": "MITSUBISHI ECLIPSE",
        "description": "ECLIPSE"
      },
      {
        "make": "MITS",
        "code": "EXP",
        "fulldescription": "MITSUBISHI EXPO",
        "description": "EXPO"
      },
      {
        "make": "MITS",
        "code": "GAL",
        "fulldescription": "MITSUBISHI GALANT",
        "description": "GALANT"
      },
      {
        "make": "MITS",
        "code": "LAN",
        "fulldescription": "MITSUBISHI LANCER",
        "description": "LANCER"
      },
      {
        "make": "MITS",
        "code": "TK",
        "fulldescription": "MITSUBISHI TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "MITS",
        "code": "MIN",
        "fulldescription": "MITSUBISHI MINICA",
        "description": "MINICA"
      },
      {
        "make": "MITS",
        "code": "MIR",
        "fulldescription": "MITSUBISHI MIRAGE",
        "description": "MIRAGE"
      },
      {
        "make": "MITS",
        "code": "PRE",
        "fulldescription": "MITSUBISHI PRECIS",
        "description": "PRECIS"
      },
      {
        "make": "MITS",
        "code": "SIG",
        "fulldescription": "MITSUBISHI SIGMA",
        "description": "SIGMA"
      },
      {
        "make": "MITS",
        "code": "STA",
        "fulldescription": "MITSUBISHI STARION",
        "description": "STARION"
      },
      {
        "make": "MITS",
        "code": "TRE",
        "fulldescription": "MITSUBISHI TREDIA",
        "description": "TREDIA"
      },
      {
        "make": "MERZ",
        "code": "TK",
        "fulldescription": "MERCEDES-BENZ TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "MERZ",
        "code": "180",
        "fulldescription": "MERCEDES-BENZ 180 SERIES",
        "description": "180 SERIES"
      },
      {
        "make": "MERZ",
        "code": "190",
        "fulldescription": "MERCEDES-BENZ 190 SERIES",
        "description": "190 SERIES"
      },
      {
        "make": "MERZ",
        "code": "200",
        "fulldescription": "MERCEDES-BENZ 200 SERIES",
        "description": "200 SERIES"
      },
      {
        "make": "MERZ",
        "code": "219",
        "fulldescription": "MERCEDES-BENZ 219 SERIES",
        "description": "219 SERIES"
      },
      {
        "make": "MERZ",
        "code": "220",
        "fulldescription": "MERCEDES-BENZ 220 SERIES",
        "description": "220 SERIES"
      },
      {
        "make": "MERZ",
        "code": "230",
        "fulldescription": "MERCEDES-BENZ 230 SERIES",
        "description": "230 SERIES"
      },
      {
        "make": "MERZ",
        "code": "240",
        "fulldescription": "MERCEDES-BENZ 240 SERIES",
        "description": "240 SERIES"
      },
      {
        "make": "MERZ",
        "code": "250",
        "fulldescription": "MERCEDES-BENZ 250 SERIES",
        "description": "250 SERIES"
      },
      {
        "make": "RAMB",
        "code": "CLA",
        "fulldescription": "RAMBLER CLASSIC",
        "description": "CLASSIC"
      },
      {
        "make": "RAMB",
        "code": "CUS",
        "fulldescription": "RAMBLER CUSTOM",
        "description": "CUSTOM"
      },
      {
        "make": "RAMB",
        "code": "DEL",
        "fulldescription": "RAMBLER DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "RAMB",
        "code": "SUP",
        "fulldescription": "RAMBLER SUPER",
        "description": "SUPER"
      },
      {
        "make": "RAMB",
        "code": "TYP",
        "fulldescription": "RAMBLER TYPHOON",
        "description": "TYPHOON"
      },
      {
        "make": "RAMS",
        "code": "ZZZ",
        "fulldescription": "RAMSES UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "RELA",
        "code": "ZZZ",
        "fulldescription": "RELIANT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "REO",
        "code": "ZZZ",
        "fulldescription": "REO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "RIND",
        "code": "ZZZ",
        "fulldescription": "RICH INDUSTRIES UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "RILE",
        "code": "ZZZ",
        "fulldescription": "RILEY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ROCH",
        "code": "ZZZ",
        "fulldescription": "ROCHDALE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ROK",
        "code": "ZZZ",
        "fulldescription": "ROCKNE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ROL",
        "code": "CAM",
        "fulldescription": "ROLLS-ROYCE CAMARGUE",
        "description": "CAMARGUE"
      },
      {
        "make": "ROL",
        "code": "COR",
        "fulldescription": "ROLLS-ROYCE CORNICHE",
        "description": "CORNICHE"
      },
      {
        "make": "ROL",
        "code": "MUL",
        "fulldescription": "ROLLS-ROYCE MULSANNE",
        "description": "MULSANNE"
      },
      {
        "make": "ROL",
        "code": "PHA",
        "fulldescription": "ROLLS-ROYCE PHANTOM",
        "description": "PHANTOM"
      },
      {
        "make": "ROL",
        "code": "SIC",
        "fulldescription": "ROLLS-ROYCE SILVER CLOUD",
        "description": "SILVER CLOUD"
      },
      {
        "make": "ROL",
        "code": "SID",
        "fulldescription": "ROLLS-ROYCE SILVER DAWN",
        "description": "SILVER DAWN"
      },
      {
        "make": "ROL",
        "code": "SIS",
        "fulldescription": "ROLLS-ROYCE SILVER SHADOW",
        "description": "SILVER SHADOW"
      },
      {
        "make": "ROL",
        "code": "SSP",
        "fulldescription": "ROLLS-ROYCE SILVER SPIRIT",
        "description": "SILVER SPIRIT"
      },
      {
        "make": "ROL",
        "code": "SPR",
        "fulldescription": "ROLLS-ROYCE SILVER SPUR",
        "description": "SILVER SPUR"
      },
      {
        "make": "ROL",
        "code": "SIW",
        "fulldescription": "ROLLS-ROYCE SILVER WRAITH",
        "description": "SILVER WRAITH"
      },
      {
        "make": "ROOT",
        "code": "ALP",
        "fulldescription": "ROOTES ALPINE",
        "description": "ALPINE"
      },
      {
        "make": "ROOT",
        "code": "ARR",
        "fulldescription": "ROOTES ARROW",
        "description": "ARROW"
      },
      {
        "make": "ROOT",
        "code": "IMP",
        "fulldescription": "ROOTES IMP",
        "description": "IMP"
      },
      {
        "make": "ROOT",
        "code": "TIG",
        "fulldescription": "ROOTES TIGER",
        "description": "TIGER"
      },
      {
        "make": "ROV",
        "code": "200",
        "fulldescription": "ROVER 2000",
        "description": "2000"
      },
      {
        "make": "ROV",
        "code": "350",
        "fulldescription": "ROVER 3500",
        "description": "3500"
      },
      {
        "make": "ROV",
        "code": "3L",
        "fulldescription": "ROVER 3 LITRE",
        "description": "3 LITRE"
      },
      {
        "make": "ROV",
        "code": "LR",
        "fulldescription": "ROVER LAND ROVER",
        "description": "LAND"
      },
      {
        "make": "ROV",
        "code": "MK4",
        "fulldescription": "ROVER MARK IV",
        "description": "MARK IV"
      },
      {
        "make": "RYCS",
        "code": "ZZZ",
        "fulldescription": "RYCSA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SABR",
        "code": "ZZZ",
        "fulldescription": "SABRA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SATR",
        "code": "ZZZ",
        "fulldescription": "SATURN CORPORATION UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SEAT",
        "code": "ZZZ",
        "fulldescription": "SEAT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SERA",
        "code": "ZZZ",
        "fulldescription": "SERA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SHEB",
        "code": "G35",
        "fulldescription": "SHELBY AMERICAN COBRA GT350",
        "description": "COBRA GT350"
      },
      {
        "make": "SHEB",
        "code": "G50",
        "fulldescription": "SHELBY AMERICAN COBRA GT500",
        "description": "COBRA GT500"
      },
      {
        "make": "SHEB",
        "code": "CSX",
        "fulldescription": "SHELBY AMERICAN CSX",
        "description": "CSX"
      },
      {
        "make": "SIAT",
        "code": "ZZZ",
        "fulldescription": "SIATA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SILA",
        "code": "ZZZ",
        "fulldescription": "SILA AUTORETTA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SIM",
        "code": "100",
        "fulldescription": "SIMCA 1000 AND 1000GL",
        "description": "1000 AND 1000GL"
      },
      {
        "make": "SIM",
        "code": "120",
        "fulldescription": "SIMCA 120",
        "description": "120"
      },
      {
        "make": "SIM",
        "code": "ARO",
        "fulldescription": "SIMCA ARONDE",
        "description": "ARONDE"
      },
      {
        "make": "SIM",
        "code": "BER",
        "fulldescription": "SIMCA BERTONE",
        "description": "BERTONE"
      },
      {
        "make": "SIM",
        "code": "ETO",
        "fulldescription": "SIMCA ETOILE",
        "description": "ETOILE"
      },
      {
        "make": "SIM",
        "code": "GLS",
        "fulldescription": "SIMCA GLS",
        "description": "GLS"
      },
      {
        "make": "SIM",
        "code": "VED",
        "fulldescription": "SIMCA VEDETTE",
        "description": "VEDETTE"
      },
      {
        "make": "SIN",
        "code": "CHA",
        "fulldescription": "SINGER CHAMOIS",
        "description": "CHAMOIS"
      },
      {
        "make": "SIN",
        "code": "VOG",
        "fulldescription": "SINGER VOGUE",
        "description": "VOGUE"
      },
      {
        "make": "SKOD",
        "code": "ZZZ",
        "fulldescription": "SKODA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SOVA",
        "code": "ZZZ",
        "fulldescription": "SOVAM UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "STAN",
        "code": "ZZZ",
        "fulldescription": "STANDARD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "STAR",
        "code": "ZZZ",
        "fulldescription": "STAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "STLG",
        "code": "825",
        "fulldescription": "STERLING 825",
        "description": "825"
      },
      {
        "make": "STLG",
        "code": "827",
        "fulldescription": "STERLING 827",
        "description": "827"
      },
      {
        "make": "STEY",
        "code": "ZZZ",
        "fulldescription": "STEYR-PUCH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "STRA",
        "code": "ZZZ",
        "fulldescription": "STRALE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "STU",
        "code": "AVA",
        "fulldescription": "STUDEBAKER AVANTI",
        "description": "AVANTI"
      },
      {
        "make": "STU",
        "code": "CHA",
        "fulldescription": "STUDEBAKER CHALLENGER",
        "description": "CHALLENGER"
      },
      {
        "make": "STU",
        "code": "CHM",
        "fulldescription": "STUDEBAKER CHAMPION",
        "description": "CHAMPION"
      },
      {
        "make": "STU",
        "code": "COM",
        "fulldescription": "STUDEBAKER COMMANDER",
        "description": "COMMANDER"
      },
      {
        "make": "STU",
        "code": "CRU",
        "fulldescription": "STUDEBAKER CRUISER",
        "description": "CRUISER"
      },
      {
        "make": "STU",
        "code": "DAY",
        "fulldescription": "STUDEBAKER DAYTONA",
        "description": "DAYTONA"
      },
      {
        "make": "STU",
        "code": "GRA",
        "fulldescription": "STUDEBAKER GRAND TURISMO",
        "description": "GRAND TURISMO"
      },
      {
        "make": "STU",
        "code": "HAW",
        "fulldescription": "STUDEBAKER HAWK SERIES",
        "description": "HAWK SERIES"
      },
      {
        "make": "STU",
        "code": "LAN",
        "fulldescription": "STUDEBAKER LANDALL",
        "description": "LANDALL"
      },
      {
        "make": "STU",
        "code": "LAR",
        "fulldescription": "STUDEBAKER LARK SERIES",
        "description": "LARK SERIES"
      },
      {
        "make": "STU",
        "code": "PRE",
        "fulldescription": "STUDEBAKER PRESIDENT",
        "description": "PRESIDENT"
      },
      {
        "make": "STU",
        "code": "RGL",
        "fulldescription": "STUDEBAKER REGAL",
        "description": "REGAL"
      },
      {
        "make": "STU",
        "code": "SCO",
        "fulldescription": "STUDEBAKER SCOTSMAN",
        "description": "SCOTSMAN"
      },
      {
        "make": "STU",
        "code": "WAG",
        "fulldescription": "STUDEBAKER WAGONAIRE",
        "description": "WAGONAIRE"
      },
      {
        "make": "STUZ",
        "code": "ZZZ",
        "fulldescription": "STUTZ UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SUNB",
        "code": "ALP",
        "fulldescription": "SUNBEAM ALPINE",
        "description": "ALPINE"
      },
      {
        "make": "SUNB",
        "code": "ARR",
        "fulldescription": "SUNBEAM ARROW",
        "description": "ARROW"
      },
      {
        "make": "SUNB",
        "code": "DEL",
        "fulldescription": "SUNBEAM DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "SUNB",
        "code": "IMP",
        "fulldescription": "SUNBEAM IMP",
        "description": "IMP"
      },
      {
        "make": "SUNB",
        "code": "MIN",
        "fulldescription": "SUNBEAM MINX",
        "description": "MINX"
      },
      {
        "make": "SUNB",
        "code": "RAP",
        "fulldescription": "SUNBEAM RAPIER",
        "description": "RAPIER"
      },
      {
        "make": "SUNB",
        "code": "TIG",
        "fulldescription": "SUNBEAM TIGER",
        "description": "TIGER"
      },
      {
        "make": "SUPT",
        "code": "ZZZ",
        "fulldescription": "SUPER TWO UNKNOWN",
        "description": "TWO UNKNOWN"
      },
      {
        "make": "SUZU",
        "code": "ZZZ",
        "fulldescription": "SUZULIGHT SU UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SYRE",
        "code": "ZZZ",
        "fulldescription": "SYRENA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TAMA",
        "code": "ZZZ",
        "fulldescription": "TAMA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TATR",
        "code": "ZZZ",
        "fulldescription": "TATRA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TAUN",
        "code": "ZZZ",
        "fulldescription": "TAUNUS (GERMAN FORD) UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TCHA",
        "code": "ZZZ",
        "fulldescription": "TCHAIKA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TRPE",
        "code": "ZZZ",
        "fulldescription": "TERRAPLANE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TJAA",
        "code": "ZZZ",
        "fulldescription": "TJAARDA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TORN",
        "code": "ZZZ",
        "fulldescription": "TORNADO (BRITISH) UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TOYP",
        "code": "ZZZ",
        "fulldescription": "TOYOPET UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TRAB",
        "code": "ZZZ",
        "fulldescription": "TRABANT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TRIU",
        "code": "250",
        "fulldescription": "TRIUMPH 250",
        "description": "250"
      },
      {
        "make": "TRIU",
        "code": "120",
        "fulldescription": "TRIUMPH 1200",
        "description": "1200"
      },
      {
        "make": "TRIU",
        "code": "125",
        "fulldescription": "TRIUMPH 1250",
        "description": "1250"
      },
      {
        "make": "TRIU",
        "code": "130",
        "fulldescription": "TRIUMPH 1300",
        "description": "1300"
      },
      {
        "make": "TRIU",
        "code": "200",
        "fulldescription": "TRIUMPH 2000",
        "description": "2000"
      },
      {
        "make": "TRIU",
        "code": "GT",
        "fulldescription": "TRIUMPH GT SERIES",
        "description": "GT SERIES"
      },
      {
        "make": "ACUR",
        "code": "INT",
        "fulldescription": "ACURA INTEGRA",
        "description": "INTEGRA"
      },
      {
        "make": "ACUR",
        "code": "NSX",
        "fulldescription": "ACURA NSX",
        "description": "NSX"
      },
      {
        "make": "ACUR",
        "code": "LEG",
        "fulldescription": "ACURA LEGEND",
        "description": "LEGEND"
      },
      {
        "make": "ACUR",
        "code": "VIG",
        "fulldescription": "ACURA VIGOR",
        "description": "VIGOR"
      },
      {
        "make": "ACUR",
        "code": "ZZZ",
        "fulldescription": "ACURA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AMER",
        "code": "ALI",
        "fulldescription": "AMERICAN ALLIANCE",
        "description": "ALLIANCE"
      },
      {
        "make": "AMER",
        "code": "AMB",
        "fulldescription": "AMERICAN AMBASSADOR",
        "description": "AMBASSADOR"
      },
      {
        "make": "AMER",
        "code": "ARN",
        "fulldescription": "AMERICAN AMERICAN",
        "description": "AMERICAN"
      },
      {
        "make": "AMER",
        "code": "AMX",
        "fulldescription": "AMERICAN AMX",
        "description": "AMX"
      },
      {
        "make": "AMER",
        "code": "CON",
        "fulldescription": "AMERICAN CONCORD",
        "description": "CONCORD"
      },
      {
        "make": "AMER",
        "code": "EAG",
        "fulldescription": "AMERICAN EAGLE",
        "description": "EAGLE"
      },
      {
        "make": "AMER",
        "code": "ENC",
        "fulldescription": "AMERICAN ENCORE",
        "description": "ENCORE"
      },
      {
        "make": "AMER",
        "code": "GRE",
        "fulldescription": "AMERICAN GREMLIN",
        "description": "GREMLIN"
      },
      {
        "make": "AMER",
        "code": "HOR",
        "fulldescription": "AMERICAN HORNET",
        "description": "HORNET"
      },
      {
        "make": "AMER",
        "code": "JAV",
        "fulldescription": "AMERICAN JAVELIN",
        "description": "JAVELIN"
      },
      {
        "make": "AMER",
        "code": "TK",
        "fulldescription": "AMERICAN TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "AMER",
        "code": "MAR",
        "fulldescription": "AMERICAN MARLIN",
        "description": "MARLIN"
      },
      {
        "make": "AMER",
        "code": "MAT",
        "fulldescription": "AMERICAN MATADOR",
        "description": "MATADOR"
      },
      {
        "make": "AMER",
        "code": "MED",
        "fulldescription": "AMERICAN MEDALLION",
        "description": "MEDALLION"
      },
      {
        "make": "AMER",
        "code": "PAC",
        "fulldescription": "AMERICAN PACER",
        "description": "PACER"
      },
      {
        "make": "AMER",
        "code": "RA",
        "fulldescription": "AMERICAN RAMBLER AMERICAN",
        "description": "RAMBLER"
      },
      {
        "make": "AMER",
        "code": "RC",
        "fulldescription": "AMERICAN RAMBLER CLASSIC",
        "description": "RAMBLER CLASSIC"
      },
      {
        "make": "AMER",
        "code": "RR",
        "fulldescription": "AMERICAN RAMBLER ROGUE",
        "description": "RAMBLER ROGUE"
      },
      {
        "make": "AMER",
        "code": "REB",
        "fulldescription": "AMERICAN REBEL",
        "description": "REBEL"
      },
      {
        "make": "AMER",
        "code": "SPI",
        "fulldescription": "AMERICAN SPIRIT",
        "description": "SPIRIT"
      },
      {
        "make": "AMER",
        "code": "SPO",
        "fulldescription": "AMERICAN SPORTABOUT",
        "description": "SPORTABOUT"
      },
      {
        "make": "AMER",
        "code": "ZZZ",
        "fulldescription": "AMERICAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AUDI",
        "code": "FOX",
        "fulldescription": "AUDI 80 LS(FOX)",
        "description": "80 LS(FOX)"
      },
      {
        "make": "AUDI",
        "code": "A80",
        "fulldescription": "AUDI 80",
        "description": "80"
      },
      {
        "make": "AUDI",
        "code": "A90",
        "fulldescription": "AUDI 90",
        "description": "90"
      },
      {
        "make": "AUDI",
        "code": "100",
        "fulldescription": "AUDI 100",
        "description": "100"
      },
      {
        "make": "AUDI",
        "code": "1GL",
        "fulldescription": "AUDI 100GL",
        "description": "100GL"
      },
      {
        "make": "AUDI",
        "code": "1LS",
        "fulldescription": "AUDI 100LS",
        "description": "100LS"
      },
      {
        "make": "AUDI",
        "code": "200",
        "fulldescription": "AUDI 200LS",
        "description": "200LS"
      },
      {
        "make": "AUDI",
        "code": "850",
        "fulldescription": "AUDI 850",
        "description": "850"
      },
      {
        "make": "AUDI",
        "code": "400",
        "fulldescription": "AUDI 4000",
        "description": "4000"
      },
      {
        "make": "AUDI",
        "code": "500",
        "fulldescription": "AUDI 5000",
        "description": "5000"
      },
      {
        "make": "AUDI",
        "code": "AA4",
        "fulldescription": "AUDI A4",
        "description": "A4"
      },
      {
        "make": "AUDI",
        "code": "AA6",
        "fulldescription": "AUDI A6",
        "description": "A6"
      },
      {
        "make": "AUDI",
        "code": "AVA",
        "fulldescription": "AUDI AVANT",
        "description": "AVANT"
      },
      {
        "make": "AUDI",
        "code": "CAB",
        "fulldescription": "AUDI CABRIOLET",
        "description": "CABRIOLET"
      },
      {
        "make": "AUDI",
        "code": "QTO",
        "fulldescription": "AUDI QUATTRO",
        "description": "QUATTRO"
      },
      {
        "make": "AUDI",
        "code": "AS4",
        "fulldescription": "AUDI S4",
        "description": "S4"
      },
      {
        "make": "AUDI",
        "code": "AS6",
        "fulldescription": "AUDI S6",
        "description": "S6"
      },
      {
        "make": "AUDI",
        "code": "S90",
        "fulldescription": "AUDI SUPER 90",
        "description": "SUPER 90"
      },
      {
        "make": "AUDI",
        "code": "V8",
        "fulldescription": "AUDI V-8",
        "description": "V-8"
      },
      {
        "make": "AUDI",
        "code": "ZZZ",
        "fulldescription": "AUDI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BMW",
        "code": "28",
        "fulldescription": "BMW 2.8",
        "description": "2.8"
      },
      {
        "make": "BMW",
        "code": "30",
        "fulldescription": "BMW 3.0 SI",
        "description": "3.0 SI"
      },
      {
        "make": "BMW",
        "code": "20",
        "fulldescription": "BMW 200",
        "description": "200"
      },
      {
        "make": "BMW",
        "code": "318",
        "fulldescription": "BMW 318I",
        "description": "318I"
      },
      {
        "make": "BMW",
        "code": "3TI",
        "fulldescription": "BMW 318TI",
        "description": "318TI"
      },
      {
        "make": "BMW",
        "code": "320",
        "fulldescription": "BMW 320I",
        "description": "320I"
      },
      {
        "make": "BMW",
        "code": "325",
        "fulldescription": "BMW 325",
        "description": "325"
      },
      {
        "make": "BMW",
        "code": "32I",
        "fulldescription": "BMW 325I",
        "description": "325I"
      },
      {
        "make": "BMW",
        "code": "28I",
        "fulldescription": "BMW 328I",
        "description": "328I"
      },
      {
        "make": "BMW",
        "code": "520",
        "fulldescription": "BMW 520",
        "description": "520"
      },
      {
        "make": "BMW",
        "code": "524",
        "fulldescription": "BMW 524 SERIES",
        "description": "524 SERIES"
      },
      {
        "make": "BMW",
        "code": "525",
        "fulldescription": "BMW 525IA",
        "description": "525IA"
      },
      {
        "make": "BMW",
        "code": "528",
        "fulldescription": "BMW 528I",
        "description": "528I"
      },
      {
        "make": "BMW",
        "code": "530",
        "fulldescription": "BMW 530I",
        "description": "530I"
      },
      {
        "make": "BMW",
        "code": "533",
        "fulldescription": "BMW 533I",
        "description": "533I"
      },
      {
        "make": "BMW",
        "code": "535",
        "fulldescription": "BMW 535 SERIES",
        "description": "535 SERIES"
      },
      {
        "make": "BMW",
        "code": "540",
        "fulldescription": "BMW 540",
        "description": "540"
      },
      {
        "make": "BMW",
        "code": "600",
        "fulldescription": "BMW 600",
        "description": "600"
      },
      {
        "make": "BMW",
        "code": "630",
        "fulldescription": "BMW 630CSI",
        "description": "630CSI"
      },
      {
        "make": "BMW",
        "code": "633",
        "fulldescription": "BMW 633CSI",
        "description": "633CSI"
      },
      {
        "make": "BMW",
        "code": "635",
        "fulldescription": "BMW 635 SERIES",
        "description": "635 SERIES"
      },
      {
        "make": "BMW",
        "code": "733",
        "fulldescription": "BMW 733 SERIES",
        "description": "733 SERIES"
      },
      {
        "make": "BMW",
        "code": "735",
        "fulldescription": "BMW 735 SERIES",
        "description": "735 SERIES"
      },
      {
        "make": "BMW",
        "code": "740",
        "fulldescription": "BMW 740",
        "description": "740"
      },
      {
        "make": "BMW",
        "code": "74I",
        "fulldescription": "BMW 740I",
        "description": "740I"
      },
      {
        "make": "BMW",
        "code": "745",
        "fulldescription": "BMW 745I",
        "description": "745I"
      },
      {
        "make": "BMW",
        "code": "75L",
        "fulldescription": "BMW  750IL",
        "description": "750IL"
      },
      {
        "make": "BMW",
        "code": "84C",
        "fulldescription": "BMW 840CI",
        "description": "840CI"
      },
      {
        "make": "BMW",
        "code": "850",
        "fulldescription": "BMW 850I",
        "description": "850I"
      },
      {
        "make": "BMW",
        "code": "160",
        "fulldescription": "BMW 1600",
        "description": "1600"
      },
      {
        "make": "BMW",
        "code": "180",
        "fulldescription": "BMW 1800",
        "description": "1800"
      },
      {
        "make": "BMW",
        "code": "200",
        "fulldescription": "BMW 2000 SERIES",
        "description": "2000 SERIES"
      },
      {
        "make": "BMW",
        "code": "002",
        "fulldescription": "BMW 2002 SERIES",
        "description": "2002 SERIES"
      },
      {
        "make": "BMW",
        "code": "250",
        "fulldescription": "BMW 2500 SERIES",
        "description": "2500 SERIES"
      },
      {
        "make": "BMW",
        "code": "280",
        "fulldescription": "BMW 2800 SERIES",
        "description": "2800 SERIES"
      },
      {
        "make": "BMW",
        "code": "BAV",
        "fulldescription": "BMW BAVARIA",
        "description": "BAVARIA"
      },
      {
        "make": "BMW",
        "code": "ISE",
        "fulldescription": "BMW ISETTA",
        "description": "ISETTA"
      },
      {
        "make": "BMW",
        "code": "L6",
        "fulldescription": "BMW L6",
        "description": "L6"
      },
      {
        "make": "BMW",
        "code": "L7",
        "fulldescription": "BMW L7",
        "description": "L7"
      },
      {
        "make": "BMW",
        "code": "M3",
        "fulldescription": "BMW M3",
        "description": "M3"
      },
      {
        "make": "BMW",
        "code": "M5",
        "fulldescription": "BMW M5",
        "description": "M5"
      },
      {
        "make": "BMW",
        "code": "M6",
        "fulldescription": "BMW M6",
        "description": "M6"
      },
      {
        "make": "BMW",
        "code": "TI",
        "fulldescription": "BMW TI",
        "description": "TI"
      },
      {
        "make": "BMW",
        "code": "ZZZ",
        "fulldescription": "BMW UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BUIC",
        "code": "APO",
        "fulldescription": "BUICK APOLLO",
        "description": "APOLLO"
      },
      {
        "make": "BUIC",
        "code": "CAL",
        "fulldescription": "BUICK CALIFORNIA",
        "description": "CALIFORNIA"
      },
      {
        "make": "BUIC",
        "code": "CNT",
        "fulldescription": "BUICK CENTURION",
        "description": "CENTURION"
      },
      {
        "make": "BUIC",
        "code": "CEN",
        "fulldescription": "BUICK CENTURY",
        "description": "CENTURY"
      },
      {
        "make": "BUIC",
        "code": "ELE",
        "fulldescription": "BUICK ELECTRA (PARK AVENUE)",
        "description": "ELECTRA (PARK AVENUE)"
      },
      {
        "make": "BUIC",
        "code": "EST",
        "fulldescription": "BUICK ESTATE WAGON",
        "description": "ESTATE WAGON"
      },
      {
        "make": "BUIC",
        "code": "GS",
        "fulldescription": "BUICK GRAND SPORTS(G.S.)",
        "description": "GRAND SPORTS(G.S.)"
      },
      {
        "make": "BUIC",
        "code": "G35",
        "fulldescription": "BUICK GS350",
        "description": "GS350"
      },
      {
        "make": "BUIC",
        "code": "G40",
        "fulldescription": "BUICK GS400",
        "description": "GS400"
      },
      {
        "make": "BUIC",
        "code": "G45",
        "fulldescription": "BUICK GS455",
        "description": "GS455"
      },
      {
        "make": "BUIC",
        "code": "INV",
        "fulldescription": "BUICK INVICTA",
        "description": "INVICTA"
      },
      {
        "make": "BUIC",
        "code": "LES",
        "fulldescription": "BUICK LE SABRE",
        "description": "LE SABRE"
      },
      {
        "make": "BUIC",
        "code": "LIM",
        "fulldescription": "BUICK LIMITED",
        "description": "LIMITED"
      },
      {
        "make": "BUIC",
        "code": "REA",
        "fulldescription": "BUICK REATTA",
        "description": "REATTA"
      },
      {
        "make": "BUIC",
        "code": "REG",
        "fulldescription": "BUICK REGAL",
        "description": "REGAL"
      },
      {
        "make": "BUIC",
        "code": "RIV",
        "fulldescription": "BUICK RIVIERA",
        "description": "RIVIERA"
      },
      {
        "make": "BUIC",
        "code": "ROA",
        "fulldescription": "BUICK ROADMASTER",
        "description": "ROADMASTER"
      },
      {
        "make": "BUIC",
        "code": "SKH",
        "fulldescription": "BUICK SKYHAWK",
        "description": "SKYHAWK"
      },
      {
        "make": "BUIC",
        "code": "SKY",
        "fulldescription": "BUICK SKYLARK",
        "description": "SKYLARK"
      },
      {
        "make": "BUIC",
        "code": "SOM",
        "fulldescription": "BUICK SOMERSET",
        "description": "SOMERSET"
      },
      {
        "make": "BUIC",
        "code": "SPE",
        "fulldescription": "BUICK SPEICAL",
        "description": "SPEICAL"
      },
      {
        "make": "BUIC",
        "code": "SPO",
        "fulldescription": "BUICK SPORTSWAGON",
        "description": "SPORTSWAGON"
      },
      {
        "make": "BUIC",
        "code": "SUP",
        "fulldescription": "BUICK SUPER",
        "description": "SUPER"
      },
      {
        "make": "BUIC",
        "code": "WIL",
        "fulldescription": "BUICK WILDCAT",
        "description": "WILDCAT"
      },
      {
        "make": "BUIC",
        "code": "ZZZ",
        "fulldescription": "BUICK UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CADI",
        "code": "60",
        "fulldescription": "CADILLAC 60 SERIES",
        "description": "60 SERIES"
      },
      {
        "make": "CADI",
        "code": "61",
        "fulldescription": "CADILLAC 61 SERIES",
        "description": "61 SERIES"
      },
      {
        "make": "CADI",
        "code": "62",
        "fulldescription": "CADILLAC 62 SERIES",
        "description": "62 SERIES"
      },
      {
        "make": "CADI",
        "code": "75",
        "fulldescription": "CADILLAC 75 SERIES",
        "description": "75 SERIES"
      },
      {
        "make": "CADI",
        "code": "ALL",
        "fulldescription": "CADILLAC ALLANTE",
        "description": "ALLANTE"
      },
      {
        "make": "CADI",
        "code": "BRO",
        "fulldescription": "CADILLAC BROUGHAM",
        "description": "BROUGHAM"
      },
      {
        "make": "CADI",
        "code": "CAL",
        "fulldescription": "CADILLAC CALAIS",
        "description": "CALAIS"
      },
      {
        "make": "CADI",
        "code": "CIM",
        "fulldescription": "CADILLAC CIMARRON",
        "description": "CIMARRON"
      },
      {
        "make": "CADI",
        "code": "DEV",
        "fulldescription": "CADILLAC DEVILLE",
        "description": "DEVILLE"
      },
      {
        "make": "CADI",
        "code": "ELD",
        "fulldescription": "CADILLAC ELDORADO",
        "description": "ELDORADO"
      },
      {
        "make": "CADI",
        "code": "FLE",
        "fulldescription": "CADILLAC FLEETWOOD",
        "description": "FLEETWOOD"
      },
      {
        "make": "CADI",
        "code": "SEV",
        "fulldescription": "CADILLAC SEVILLE",
        "description": "SEVILLE"
      },
      {
        "make": "CADI",
        "code": "TRS",
        "fulldescription": "CADILLAC TOURING SEDAN",
        "description": "TOURING SEDAN"
      },
      {
        "make": "CADI",
        "code": "ZZZ",
        "fulldescription": "CADILLAC UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CHEV",
        "code": "210",
        "fulldescription": "CHEVROLET 210 SERIES",
        "description": "210 SERIES"
      },
      {
        "make": "CHEV",
        "code": "300",
        "fulldescription": "CHEVROLET 300 DELUXE",
        "description": "300 DELUXE"
      },
      {
        "make": "CHEV",
        "code": "TK",
        "fulldescription": "CHEVROLET TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "CHEV",
        "code": "BEL",
        "fulldescription": "CHEVROLET BEL AIR",
        "description": "BEL AIR"
      },
      {
        "make": "CHEV",
        "code": "BER",
        "fulldescription": "CHEVROLET BERETTA",
        "description": "BERETTA"
      },
      {
        "make": "CHEV",
        "code": "BIS",
        "fulldescription": "CHEVROLET BISCAYNE",
        "description": "BISCAYNE"
      },
      {
        "make": "CHEV",
        "code": "BRK",
        "fulldescription": "CHEVROLET BROOKWOOD",
        "description": "BROOKWOOD"
      },
      {
        "make": "CHEV",
        "code": "CAM",
        "fulldescription": "CHEVROLET CAMARO",
        "description": "CAMARO"
      },
      {
        "make": "CHEV",
        "code": "CAP",
        "fulldescription": "CHEVROLET CAPRICE",
        "description": "CAPRICE"
      },
      {
        "make": "CHEV",
        "code": "CAV",
        "fulldescription": "CHEVROLET CAVALIER",
        "description": "CAVALIER"
      },
      {
        "make": "CHEV",
        "code": "CEL",
        "fulldescription": "CHEVROLET CELEBRITY",
        "description": "CELEBRITY"
      },
      {
        "make": "CHEV",
        "code": "ELL",
        "fulldescription": "CHEVROLET CHEVELLE",
        "description": "CHEVELLE"
      },
      {
        "make": "CHEV",
        "code": "EVE",
        "fulldescription": "CHEVROLET CHEVETTE",
        "description": "CHEVETTE"
      },
      {
        "make": "CHEV",
        "code": "CH2",
        "fulldescription": "CHEVROLET CHEVY II",
        "description": "CHEVY II"
      },
      {
        "make": "CHEV",
        "code": "CIT",
        "fulldescription": "CHEVROLET CITATION",
        "description": "CITATION"
      },
      {
        "make": "CHEV",
        "code": "CVR",
        "fulldescription": "CHEVROLET CORSA(CORVAIR)",
        "description": "CORSA(CORVAIR)"
      },
      {
        "make": "CHEV",
        "code": "CVT",
        "fulldescription": "CHEVROLET CORVETTE",
        "description": "CORVETTE"
      },
      {
        "make": "CHEV",
        "code": "DEL",
        "fulldescription": "CHEVROLET DEL RAY",
        "description": "DEL RAY"
      },
      {
        "make": "CHEV",
        "code": "DEX",
        "fulldescription": "CHEVROLET DELUXE (CHEVELLE)",
        "description": "DELUXE (CHEVELLE)"
      },
      {
        "make": "CHEV",
        "code": "ELC",
        "fulldescription": "CHEVROLET EL CAMINO",
        "description": "EL CAMINO"
      },
      {
        "make": "CHEV",
        "code": "EST",
        "fulldescription": "CHEVROLET ESTATE WAGON",
        "description": "ESTATE WAGON"
      },
      {
        "make": "CHEV",
        "code": "FLE",
        "fulldescription": "CHEVROLET FLEETLINE",
        "description": "FLEETLINE"
      },
      {
        "make": "CHEV",
        "code": "IMP",
        "fulldescription": "CHEVROLET IMPALA",
        "description": "IMPALA"
      },
      {
        "make": "CHEV",
        "code": "KIN",
        "fulldescription": "CHEVROLET KINGSWOOD",
        "description": "KINGSWOOD"
      },
      {
        "make": "CHEV",
        "code": "LUM",
        "fulldescription": "CHEVROLET LUMINA",
        "description": "LUMINA"
      },
      {
        "make": "CHEV",
        "code": "MAL",
        "fulldescription": "CHEVROLET MALIBU",
        "description": "MALIBU"
      },
      {
        "make": "CHEV",
        "code": "MOC",
        "fulldescription": "CHEVROLET MONTE CARLO",
        "description": "MONTE CARLO"
      },
      {
        "make": "CHEV",
        "code": "MON",
        "fulldescription": "CHEVROLET MONZA",
        "description": "MONZA"
      },
      {
        "make": "CHEV",
        "code": "NOV",
        "fulldescription": "CHEVROLET NOVA (CHEVY II AND CONCOURS)",
        "description": "NOVA (CHEVY II AND CONCOURS)"
      },
      {
        "make": "CHEV",
        "code": "PAR",
        "fulldescription": "CHEVROLET PARKWOOD",
        "description": "PARKWOOD"
      },
      {
        "make": "CHEV",
        "code": "SPE",
        "fulldescription": "CHEVROLET SPECTRUM",
        "description": "SPECTRUM"
      },
      {
        "make": "CHEV",
        "code": "SPR",
        "fulldescription": "CHEVROLET SPRINT",
        "description": "SPRINT"
      },
      {
        "make": "CHEV",
        "code": "STY",
        "fulldescription": "CHEVROLET STYLE LINE",
        "description": "STYLE LINE"
      },
      {
        "make": "CHEV",
        "code": "STM",
        "fulldescription": "CHEVROLET STYLE MASTER",
        "description": "STYLE MASTER"
      },
      {
        "make": "CHEV",
        "code": "TOW",
        "fulldescription": "CHEVROLET TOWNSMAN",
        "description": "TOWNSMAN"
      },
      {
        "make": "CHEV",
        "code": "VEG",
        "fulldescription": "CHEVROLET VEGA",
        "description": "VEGA"
      },
      {
        "make": "CHEV",
        "code": "ZZZ",
        "fulldescription": "CHEVROLET UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CHRY",
        "code": "300",
        "fulldescription": "CHRYSLER 300",
        "description": "300"
      },
      {
        "make": "CHRY",
        "code": "CIR",
        "fulldescription": "CHRYSLER CIRRUS",
        "description": "CIRRUS"
      },
      {
        "make": "CHRY",
        "code": "COM",
        "fulldescription": "CHRYSLER COMMANDER",
        "description": "COMMANDER"
      },
      {
        "make": "CHRY",
        "code": "CNC",
        "fulldescription": "CHRYSLER CONCORDE",
        "description": "CONCORDE"
      },
      {
        "make": "CHRY",
        "code": "CON",
        "fulldescription": "CHRYSLER CONQUEST",
        "description": "CONQUEST"
      },
      {
        "make": "CHRY",
        "code": "COR",
        "fulldescription": "CHRYSLER CORDOBA",
        "description": "CORDOBA"
      },
      {
        "make": "CHRY",
        "code": "ECL",
        "fulldescription": "CHRYSLER E CLASS",
        "description": "E CLASS"
      },
      {
        "make": "CHRY",
        "code": "EXE",
        "fulldescription": "CHRYSLER EXECUTIVE SEDAN",
        "description": "EXECUTIVE SEDAN"
      },
      {
        "make": "CHRY",
        "code": "FAV",
        "fulldescription": "CHRYSLER FIFTH AVENUE",
        "description": "FIFTH AVENUE"
      },
      {
        "make": "CHRY",
        "code": "IPR",
        "fulldescription": "CHRYSLER IMPERIAL",
        "description": "IMPERIAL"
      },
      {
        "make": "CHRY",
        "code": "LAS",
        "fulldescription": "CHRYSLER LASER",
        "description": "LASER"
      },
      {
        "make": "CHRY",
        "code": "LBN",
        "fulldescription": "CHRYSLER LEBARON",
        "description": "LEBARON"
      },
      {
        "make": "CHRY",
        "code": "LHS",
        "fulldescription": "CHRYSLER LHS",
        "description": "LHS"
      },
      {
        "make": "CHRY",
        "code": "LID",
        "fulldescription": "CHRYSLER LIDO",
        "description": "LIDO"
      },
      {
        "make": "CHRY",
        "code": "LIM",
        "fulldescription": "CHRYSLER LIMOUSINE",
        "description": "LIMOUSINE"
      },
      {
        "make": "CHRY",
        "code": "MED",
        "fulldescription": "CHRYSLER MEDALLION",
        "description": "MEDALLION"
      },
      {
        "make": "CHRY",
        "code": "NY",
        "fulldescription": "CHRYSLER NEW YORKER",
        "description": "NEW YORKER"
      },
      {
        "make": "CHRY",
        "code": "NEW",
        "fulldescription": "CHRYSLER NEWPORT",
        "description": "NEWPORT"
      },
      {
        "make": "CHRY",
        "code": "PRE",
        "fulldescription": "CHRYSLER PREMIER",
        "description": "PREMIER"
      },
      {
        "make": "CHRY",
        "code": "ROY",
        "fulldescription": "CHRYSLER ROYAL",
        "description": "ROYAL"
      },
      {
        "make": "CHRY",
        "code": "SAL",
        "fulldescription": "CHRYSLER SALON",
        "description": "SALON"
      },
      {
        "make": "CHRY",
        "code": "SAR",
        "fulldescription": "CHRYSLER SARATOGA",
        "description": "SARATOGA"
      },
      {
        "make": "CHRY",
        "code": "SEB",
        "fulldescription": "CHRYSLER SEBRING",
        "description": "SEBRING"
      },
      {
        "make": "CHRY",
        "code": "TC",
        "fulldescription": "CHRYSLER TC",
        "description": "TC"
      },
      {
        "make": "CHRY",
        "code": "TOW",
        "fulldescription": "CHRYSLER TOWN AND COUNTRY",
        "description": "TOWN AND COUNTRY"
      },
      {
        "make": "CHRY",
        "code": "TK",
        "fulldescription": "CHRYSLER TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "CHRY",
        "code": "WIN",
        "fulldescription": "CHRYSLER WINDSOR",
        "description": "WINDSOR"
      },
      {
        "make": "CHRY",
        "code": "ZZZ",
        "fulldescription": "CHRYSLER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DATS",
        "code": "110",
        "fulldescription": "DATSUN 110",
        "description": "110"
      },
      {
        "make": "DATS",
        "code": "2SX",
        "fulldescription": "DATSUN 200SX",
        "description": "200SX"
      },
      {
        "make": "DATS",
        "code": "210",
        "fulldescription": "DATSUN 210 (OR B-210)",
        "description": "210 (OR B-210)"
      },
      {
        "make": "DATS",
        "code": "24Z",
        "fulldescription": "DATSUN 240Z",
        "description": "240Z"
      },
      {
        "make": "DATS",
        "code": "260",
        "fulldescription": "DATSUN 260Z",
        "description": "260Z"
      },
      {
        "make": "DATS",
        "code": "280",
        "fulldescription": "DATSUN 280Z",
        "description": "280Z"
      },
      {
        "make": "DATS",
        "code": "2ZX",
        "fulldescription": "DATSUN 280ZX",
        "description": "280ZX"
      },
      {
        "make": "DATS",
        "code": "310",
        "fulldescription": "DATSUN 310",
        "description": "310"
      },
      {
        "make": "DATS",
        "code": "311",
        "fulldescription": "DATSUN 311",
        "description": "311"
      },
      {
        "make": "DATS",
        "code": "510",
        "fulldescription": "DATSUN 510",
        "description": "510"
      },
      {
        "make": "DATS",
        "code": "610",
        "fulldescription": "DATSUN 610",
        "description": "610"
      },
      {
        "make": "DATS",
        "code": "710",
        "fulldescription": "DATSUN 710",
        "description": "710"
      },
      {
        "make": "DATS",
        "code": "810",
        "fulldescription": "DATSUN 810",
        "description": "810"
      },
      {
        "make": "DATS",
        "code": "120",
        "fulldescription": "DATSUN 1200",
        "description": "1200"
      },
      {
        "make": "DATS",
        "code": "F10",
        "fulldescription": "DATSUN F-10",
        "description": "F-10"
      },
      {
        "make": "DATS",
        "code": "HON",
        "fulldescription": "DATSUN HONEY BEE",
        "description": "HONEY BEE"
      },
      {
        "make": "DATS",
        "code": "TK",
        "fulldescription": "DATSUN LIL HUSTLER",
        "description": "LIL HUSTLER"
      },
      {
        "make": "DATS",
        "code": "MAX",
        "fulldescription": "DATSUN MAXIMA",
        "description": "MAXIMA"
      },
      {
        "make": "DATS",
        "code": "SEN",
        "fulldescription": "DATSUN SENTRA",
        "description": "SENTRA"
      },
      {
        "make": "DATS",
        "code": "ZZZ",
        "fulldescription": "DATSUN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DODG",
        "code": "330",
        "fulldescription": "DODGE 330 SERIES",
        "description": "330 SERIES"
      },
      {
        "make": "DODG",
        "code": "400",
        "fulldescription": "DODGE 400 SERIES",
        "description": "400 SERIES"
      },
      {
        "make": "DODG",
        "code": "440",
        "fulldescription": "DODGE 440 SERIES",
        "description": "440 SERIES"
      },
      {
        "make": "DODG",
        "code": "600",
        "fulldescription": "DODGE 600 SERIES",
        "description": "600 SERIES"
      },
      {
        "make": "DODG",
        "code": "880",
        "fulldescription": "DODGE 880 SERIES",
        "description": "880 SERIES"
      },
      {
        "make": "DODG",
        "code": "100",
        "fulldescription": "DODGE A 100 COMPACT",
        "description": "A 100 COMPACT"
      },
      {
        "make": "DODG",
        "code": "ARI",
        "fulldescription": "DODGE ARIES",
        "description": "ARIES"
      },
      {
        "make": "DODG",
        "code": "ASP",
        "fulldescription": "DODGE ASPEN",
        "description": "ASPEN"
      },
      {
        "make": "DODG",
        "code": "AVN",
        "fulldescription": "DODGE AVENGER",
        "description": "AVENGER"
      },
      {
        "make": "DODG",
        "code": "TK",
        "fulldescription": "DODGE TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "DODG",
        "code": "CHL",
        "fulldescription": "DODGE CHALLENGER",
        "description": "CHALLENGER"
      },
      {
        "make": "DODG",
        "code": "CHA",
        "fulldescription": "DODGE CHARGER (AND SHELBY CHARGER",
        "description": "CHARGER (AND SHELBY CHARGER"
      },
      {
        "make": "DODG",
        "code": "CLT",
        "fulldescription": "DODGE COLT",
        "description": "COLT"
      },
      {
        "make": "DODG",
        "code": "COM",
        "fulldescription": "DODGE COMPACT SPORTSMAN",
        "description": "COMPACT SPORTSMAN"
      },
      {
        "make": "DODG",
        "code": "CON",
        "fulldescription": "DODGE CONQUEST",
        "description": "CONQUEST"
      },
      {
        "make": "DODG",
        "code": "COR",
        "fulldescription": "DODGE CORONET",
        "description": "CORONET"
      },
      {
        "make": "DODG",
        "code": "DAR",
        "fulldescription": "DODGE DART",
        "description": "DART"
      },
      {
        "make": "DODG",
        "code": "DAY",
        "fulldescription": "DODGE DAYTONA",
        "description": "DAYTONA"
      },
      {
        "make": "DODG",
        "code": "DEL",
        "fulldescription": "DODGE DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "DODG",
        "code": "DEM",
        "fulldescription": "DODGE DEMON (DART)",
        "description": "DEMON (DART)"
      },
      {
        "make": "DODG",
        "code": "DIP",
        "fulldescription": "DODGE DIPLOMAT",
        "description": "DIPLOMAT"
      },
      {
        "make": "DODG",
        "code": "DYN",
        "fulldescription": "DODGE DYNASTY",
        "description": "DYNASTY"
      },
      {
        "make": "DODG",
        "code": "FLS",
        "fulldescription": "DODGE FLEET SPECIAL",
        "description": "FLEET SPECIAL"
      },
      {
        "make": "DODG",
        "code": "INT",
        "fulldescription": "DODGE INTREPID",
        "description": "INTREPID"
      },
      {
        "make": "DODG",
        "code": "LAN",
        "fulldescription": "DODGE LANCER",
        "description": "LANCER"
      },
      {
        "make": "DODG",
        "code": "MAG",
        "fulldescription": "DODGE MAGNUM",
        "description": "MAGNUM"
      },
      {
        "make": "DODG",
        "code": "MEA",
        "fulldescription": "DODGE MEADOWBROOK",
        "description": "MEADOWBROOK"
      },
      {
        "make": "DODG",
        "code": "MIR",
        "fulldescription": "DODGE MIRADA",
        "description": "MIRADA"
      },
      {
        "make": "DODG",
        "code": "MON",
        "fulldescription": "DODGE MONACO",
        "description": "MONACO"
      },
      {
        "make": "DODG",
        "code": "NEO",
        "fulldescription": "DODGE NEON",
        "description": "NEON"
      },
      {
        "make": "DODG",
        "code": "OMI",
        "fulldescription": "DODGE OMNI",
        "description": "OMNI"
      },
      {
        "make": "DODG",
        "code": "PHO",
        "fulldescription": "DODGE PHOENIX",
        "description": "PHOENIX"
      },
      {
        "make": "DODG",
        "code": "PIO",
        "fulldescription": "DODGE PIONEER",
        "description": "PIONEER"
      },
      {
        "make": "DODG",
        "code": "POL",
        "fulldescription": "DODGE POLARA",
        "description": "POLARA"
      },
      {
        "make": "DODG",
        "code": "ROY",
        "fulldescription": "DODGE ROYAL",
        "description": "ROYAL"
      },
      {
        "make": "DODG",
        "code": "SEN",
        "fulldescription": "DODGE SENECA",
        "description": "SENECA"
      },
      {
        "make": "DODG",
        "code": "SHA",
        "fulldescription": "DODGE SHADOW",
        "description": "SHADOW"
      },
      {
        "make": "DODG",
        "code": "SPI",
        "fulldescription": "DODGE SPIRIT",
        "description": "SPIRIT"
      },
      {
        "make": "DODG",
        "code": "STE",
        "fulldescription": "DODGE STEALTH",
        "description": "STEALTH"
      },
      {
        "make": "DODG",
        "code": "STA",
        "fulldescription": "DODGE STRATUS",
        "description": "STRATUS"
      },
      {
        "make": "DODG",
        "code": "STR",
        "fulldescription": "DODGE ST. REGIS",
        "description": "ST. REGIS"
      },
      {
        "make": "DODG",
        "code": "SWI",
        "fulldescription": "DODGE SWINGER",
        "description": "SWINGER"
      },
      {
        "make": "DODG",
        "code": "VIP",
        "fulldescription": "DODGE VIPER",
        "description": "VIPER"
      },
      {
        "make": "DODG",
        "code": "WAY",
        "fulldescription": "DODGE WAYFARER",
        "description": "WAYFARER"
      },
      {
        "make": "DODG",
        "code": "ZZZ",
        "fulldescription": "DODGE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "EGIL",
        "code": "MED",
        "fulldescription": "EAGLE MEDALLION",
        "description": "MEDALLION"
      },
      {
        "make": "EGIL",
        "code": "PRE",
        "fulldescription": "EAGLE PREMIER",
        "description": "PREMIER"
      },
      {
        "make": "EGIL",
        "code": "SUM",
        "fulldescription": "EAGLE SUMMIT",
        "description": "SUMMIT"
      },
      {
        "make": "EGIL",
        "code": "TAL",
        "fulldescription": "EAGLE TALON",
        "description": "TALON"
      },
      {
        "make": "EGIL",
        "code": "VIS",
        "fulldescription": "EAGLE VISION",
        "description": "VISION"
      },
      {
        "make": "EGIL",
        "code": "ZZZ",
        "fulldescription": "EAGLE TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "FORD",
        "code": "300",
        "fulldescription": "FORD 300 SERIES",
        "description": "300 SERIES"
      },
      {
        "make": "FORD",
        "code": "7LR",
        "fulldescription": "FORD 7 LITRE",
        "description": "7 LITRE"
      },
      {
        "make": "FORD",
        "code": "ASP",
        "fulldescription": "FORD ASPIRE",
        "description": "ASPIRE"
      },
      {
        "make": "FORD",
        "code": "COB",
        "fulldescription": "FORD COBRA",
        "description": "COBRA"
      },
      {
        "make": "FORD",
        "code": "CNT",
        "fulldescription": "FORD CONTOUR",
        "description": "CONTOUR"
      },
      {
        "make": "FORD",
        "code": "COY",
        "fulldescription": "FORD COUNTRY SEDAN",
        "description": "COUNTRY SEDAN"
      },
      {
        "make": "FORD",
        "code": "COQ",
        "fulldescription": "FORD COUNTRY SQUIRE",
        "description": "COUNTRY SQUIRE"
      },
      {
        "make": "FORD",
        "code": "CRE",
        "fulldescription": "FORD CRESTLINE",
        "description": "CRESTLINE"
      },
      {
        "make": "FORD",
        "code": "CUS",
        "fulldescription": "FORD CUSTOM",
        "description": "CUSTOM"
      },
      {
        "make": "FORD",
        "code": "CST",
        "fulldescription": "FORD CUSTOMLINE",
        "description": "CUSTOMLINE"
      },
      {
        "make": "FORD",
        "code": "DEL",
        "fulldescription": "FORD DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "FORD",
        "code": "ELI",
        "fulldescription": "FORD ELITE",
        "description": "ELITE"
      },
      {
        "make": "FORD",
        "code": "ESC",
        "fulldescription": "FORD ESCORT",
        "description": "ESCORT"
      },
      {
        "make": "FORD",
        "code": "EXP",
        "fulldescription": "FORD EXP",
        "description": "EXP"
      },
      {
        "make": "FORD",
        "code": "FAI",
        "fulldescription": "FORD FAIRLANE",
        "description": "FAIRLANE"
      },
      {
        "make": "FORD",
        "code": "FAR",
        "fulldescription": "FORD FAIRMONT",
        "description": "FAIRMONT"
      },
      {
        "make": "FORD",
        "code": "FAL",
        "fulldescription": "FORD FALCON",
        "description": "FALCON"
      },
      {
        "make": "FORD",
        "code": "FES",
        "fulldescription": "FORD FESTIVA",
        "description": "FESTIVA"
      },
      {
        "make": "FORD",
        "code": "FRO",
        "fulldescription": "FORD FRONTENAC",
        "description": "FRONTENAC"
      },
      {
        "make": "FORD",
        "code": "FUT",
        "fulldescription": "FORD FUTURA",
        "description": "FUTURA"
      },
      {
        "make": "FORD",
        "code": "GAL",
        "fulldescription": "FORD GALAXIE",
        "description": "GALAXIE"
      },
      {
        "make": "FORD",
        "code": "GRA",
        "fulldescription": "FORD GRANADA",
        "description": "GRANADA"
      },
      {
        "make": "FORD",
        "code": "LAS",
        "fulldescription": "FORD LASER",
        "description": "LASER"
      },
      {
        "make": "FORD",
        "code": "LTD",
        "fulldescription": "FORD LTD",
        "description": "LTD"
      },
      {
        "make": "FORD",
        "code": "LT2",
        "fulldescription": "FORD LTD II",
        "description": "LTD II"
      },
      {
        "make": "FORD",
        "code": "MAI",
        "fulldescription": "FORD MAINLINE",
        "description": "MAINLINE"
      },
      {
        "make": "FORD",
        "code": "MAV",
        "fulldescription": "FORD MAVERICK",
        "description": "MAVERICK"
      },
      {
        "make": "FORD",
        "code": "MER",
        "fulldescription": "FORD MERKUR",
        "description": "MERKUR"
      },
      {
        "make": "FORD",
        "code": "MOA",
        "fulldescription": "FORD MODEL A",
        "description": "MODEL A"
      },
      {
        "make": "FORD",
        "code": "MOT",
        "fulldescription": "FORD MODEL T",
        "description": "MODEL T"
      },
      {
        "make": "FORD",
        "code": "MUS",
        "fulldescription": "FORD MUSTANG",
        "description": "MUSTANG"
      },
      {
        "make": "FORD",
        "code": "NEV",
        "fulldescription": "FORD NEVADA",
        "description": "NEVADA"
      },
      {
        "make": "FORD",
        "code": "PTA",
        "fulldescription": "FORD PANTERA",
        "description": "PANTERA"
      },
      {
        "make": "FORD",
        "code": "PIN",
        "fulldescription": "FORD PINTO",
        "description": "PINTO"
      },
      {
        "make": "FORD",
        "code": "PRO",
        "fulldescription": "FORD PROBE",
        "description": "PROBE"
      },
      {
        "make": "FORD",
        "code": "RAH",
        "fulldescription": "FORD RANCH",
        "description": "RANCH"
      },
      {
        "make": "FORD",
        "code": "RAW",
        "fulldescription": "FORD RANCH WAGON",
        "description": "RANCH WAGON"
      },
      {
        "make": "FORD",
        "code": "RAN",
        "fulldescription": "FORD RANCHERO",
        "description": "RANCHERO"
      },
      {
        "make": "FORD",
        "code": "SPE",
        "fulldescription": "FORD SPECIAL",
        "description": "SPECIAL"
      },
      {
        "make": "FORD",
        "code": "SQU",
        "fulldescription": "FORD SQUIRE",
        "description": "SQUIRE"
      },
      {
        "make": "FORD",
        "code": "STA",
        "fulldescription": "FORD STARLINER",
        "description": "STARLINER"
      },
      {
        "make": "FORD",
        "code": "SUN",
        "fulldescription": "FORD SUNLINER",
        "description": "SUNLINER"
      },
      {
        "make": "FORD",
        "code": "SUP",
        "fulldescription": "FORD SUPER",
        "description": "SUPER"
      },
      {
        "make": "FORD",
        "code": "TAU",
        "fulldescription": "FORD TAURUS",
        "description": "TAURUS"
      },
      {
        "make": "FORD",
        "code": "TEM",
        "fulldescription": "FORD TEMPO",
        "description": "TEMPO"
      },
      {
        "make": "FORD",
        "code": "THU",
        "fulldescription": "FORD THUNDERBIRD",
        "description": "THUNDERBIRD"
      },
      {
        "make": "FORD",
        "code": "TOR",
        "fulldescription": "FORD TORINO",
        "description": "TORINO"
      },
      {
        "make": "FORD",
        "code": "VIC",
        "fulldescription": "FORD VICTORIA",
        "description": "VICTORIA"
      },
      {
        "make": "FORD",
        "code": "TK",
        "fulldescription": "FORD TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "FORD",
        "code": "XL",
        "fulldescription": "FORD XL",
        "description": "XL"
      },
      {
        "make": "FORD",
        "code": "ZZZ",
        "fulldescription": "FORD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GEO",
        "code": "MET",
        "fulldescription": "GEO METRO",
        "description": "METRO"
      },
      {
        "make": "GEO",
        "code": "PRI",
        "fulldescription": "GEO PRIZM",
        "description": "PRIZM"
      },
      {
        "make": "GEO",
        "code": "STO",
        "fulldescription": "GEO STORM",
        "description": "STORM"
      },
      {
        "make": "GEO",
        "code": "TK",
        "fulldescription": "GEO TRACKER",
        "description": "TRACKER"
      },
      {
        "make": "GEO",
        "code": "ZZZ",
        "fulldescription": "GEO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GMC",
        "code": "CAB",
        "fulldescription": "GENERAL MOTOR CORP. CABELLERO",
        "description": "CABELLERO"
      },
      {
        "make": "GMC",
        "code": "TK",
        "fulldescription": "GENERAL MOTOR CORP. TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "GMC",
        "code": "SPN",
        "fulldescription": "GENERAL MOTOR CORP. SPRINT",
        "description": "SPRINT"
      },
      {
        "make": "GMC",
        "code": "ZZZ",
        "fulldescription": "GENERAL MOTOR CORP. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HOND",
        "code": "CIV",
        "fulldescription": "HONDA CIVIC, HONDA CIVIC DEL SOL",
        "description": "CIVIC,  CIVIC DEL SOL"
      },
      {
        "make": "HOND",
        "code": "TK",
        "fulldescription": "HONDA TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "HOND",
        "code": "PRE",
        "fulldescription": "HONDA PRELUDE",
        "description": "PRELUDE"
      },
      {
        "make": "HOND",
        "code": "ZZZ",
        "fulldescription": "HONDA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HYUN",
        "code": "ACC",
        "fulldescription": "HYUNDAI ACCENT",
        "description": "ACCENT"
      },
      {
        "make": "HYUN",
        "code": "ELN",
        "fulldescription": "HYUNDAI ELANTRA",
        "description": "ELANTRA"
      },
      {
        "make": "HYUN",
        "code": "EXC",
        "fulldescription": "HYUNDAI EXCEL",
        "description": "EXCEL"
      },
      {
        "make": "HYUN",
        "code": "MAR",
        "fulldescription": "HYUNDAI MARCIA",
        "description": "MARCIA"
      },
      {
        "make": "HYUN",
        "code": "PON",
        "fulldescription": "HYUNDAI PONY",
        "description": "PONY"
      },
      {
        "make": "HYUN",
        "code": "SCP",
        "fulldescription": "HYUNDAI SCOUPE",
        "description": "SCOUPE"
      },
      {
        "make": "HYUN",
        "code": "SON",
        "fulldescription": "HYUNDAI SONATA",
        "description": "SONATA"
      },
      {
        "make": "HYUN",
        "code": "STE",
        "fulldescription": "HYUNDAI STEILAR",
        "description": "STEILAR"
      },
      {
        "make": "HYUN",
        "code": "ZZZ",
        "fulldescription": "HYUNDAI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ISU",
        "code": "TK",
        "fulldescription": "ISUZU TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "ISU",
        "code": "IMP",
        "fulldescription": "ISUZU IMPULSE",
        "description": "IMPULSE"
      },
      {
        "make": "ISU",
        "code": "IMA",
        "fulldescription": "ISUZU I-MARK",
        "description": "I-MARK"
      },
      {
        "make": "ISU",
        "code": "STY",
        "fulldescription": "ISUZU STYLUS",
        "description": "STYLUS"
      },
      {
        "make": "ISU",
        "code": "ZZZ",
        "fulldescription": "ISUZU UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "JAGU",
        "code": "24L",
        "fulldescription": "JAGUAR 2.4 LITRE",
        "description": "2.4 LITRE"
      },
      {
        "make": "JAGU",
        "code": "34L",
        "fulldescription": "JAGUAR 3.4 LITRE",
        "description": "3.4 LITRE"
      },
      {
        "make": "JAGU",
        "code": "38L",
        "fulldescription": "JAGUAR 3.8 LITRE",
        "description": "3.8 LITRE"
      },
      {
        "make": "JAGU",
        "code": "42L",
        "fulldescription": "JAGUAR 4.2 LITRE",
        "description": "4.2 LITRE"
      },
      {
        "make": "JAGU",
        "code": "340",
        "fulldescription": "JAGUAR 340",
        "description": "340"
      },
      {
        "make": "JAGU",
        "code": "420",
        "fulldescription": "JAGUAR 420",
        "description": "420"
      },
      {
        "make": "JAGU",
        "code": "ETY",
        "fulldescription": "JAGUAR \"E\" TYPE",
        "description": "\"E\" TYPE"
      },
      {
        "make": "JAGU",
        "code": "MAR",
        "fulldescription": "JAGUAR MARK V SERIES",
        "description": "MARK V SERIES"
      },
      {
        "make": "JAGU",
        "code": "MTS",
        "fulldescription": "JAGUAR MARK TEN SALON",
        "description": "MARK TEN SALON"
      },
      {
        "make": "JAGU",
        "code": "SOV",
        "fulldescription": "JAGUAR SOVEREIGN",
        "description": "SOVEREIGN"
      },
      {
        "make": "JAGU",
        "code": "V12",
        "fulldescription": "JAGUAR V12",
        "description": "V12"
      },
      {
        "make": "JAGU",
        "code": "VAN",
        "fulldescription": "JAGUAR VANDEN PLAS",
        "description": "VANDEN PLAS"
      },
      {
        "make": "JAGU",
        "code": "XJ",
        "fulldescription": "JAGUAR XJ",
        "description": "XJ"
      },
      {
        "make": "JAGU",
        "code": "XJC",
        "fulldescription": "JAGUAR XJC",
        "description": "XJC"
      },
      {
        "make": "JAGU",
        "code": "XJR",
        "fulldescription": "JAGUAR XJR",
        "description": "XJR"
      },
      {
        "make": "JAGU",
        "code": "XJS",
        "fulldescription": "JAGUAR XJS",
        "description": "XJS"
      },
      {
        "make": "JAGU",
        "code": "XJ6",
        "fulldescription": "JAGUAR XJ6",
        "description": "XJ6"
      },
      {
        "make": "JAGU",
        "code": "J12",
        "fulldescription": "JAGUAR XJ12",
        "description": "XJ12"
      },
      {
        "make": "JAGU",
        "code": "XJ4",
        "fulldescription": "JAGUAR XJ40",
        "description": "XJ40"
      },
      {
        "make": "JAGU",
        "code": "XK",
        "fulldescription": "JAGUAR XK SERIES",
        "description": "XK SERIES"
      },
      {
        "make": "JAGU",
        "code": "XKE",
        "fulldescription": "JAGUAR XK-E SERIES",
        "description": "XK-E SERIES"
      },
      {
        "make": "JAGU",
        "code": "ZZZ",
        "fulldescription": "JAGUAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "JEEP",
        "code": "TK",
        "fulldescription": "JEEP TRUCK (ALL TYPES OF JEEP)",
        "description": "TRUCK (ALL TYPES OF )"
      },
      {
        "make": "KIA",
        "code": "SEP",
        "fulldescription": "KIA MOTOR CORPORATION SEPHIA",
        "description": "SEPHIA"
      },
      {
        "make": "KIA",
        "code": "TK",
        "fulldescription": "KIA TRUCK (SPORTAGE)",
        "description": "KIA TRUCK (SPORTAGE)"
      },
      {
        "make": "KIA",
        "code": "ZZZ",
        "fulldescription": "KIA UNKNOWN",
        "description": "KIA UNKNOWN"
      },
      {
        "make": "LEXS",
        "code": "250",
        "fulldescription": "LEXUS ES250",
        "description": "ES250"
      },
      {
        "make": "LEXS",
        "code": "300",
        "fulldescription": "LEXUS ES300",
        "description": "ES300"
      },
      {
        "make": "LEXS",
        "code": "GS3",
        "fulldescription": "LEXUS GS300",
        "description": "GS300"
      },
      {
        "make": "LEXS",
        "code": "400",
        "fulldescription": "LEXUS LS400",
        "description": "LS400"
      },
      {
        "make": "LEXS",
        "code": "S30",
        "fulldescription": "LEXUS SC300",
        "description": "SC300"
      },
      {
        "make": "LEXS",
        "code": "S40",
        "fulldescription": "LEXUS SC400",
        "description": "SC400"
      },
      {
        "make": "LEXS",
        "code": "ZZZ",
        "fulldescription": "LEXUS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LINC",
        "code": "CON",
        "fulldescription": "LINCOLN CONTINENTAL",
        "description": "CONTINENTAL"
      },
      {
        "make": "LINC",
        "code": "CUS",
        "fulldescription": "LINCOLN CUSTOM",
        "description": "CUSTOM"
      },
      {
        "make": "LINC",
        "code": "MK2",
        "fulldescription": "LINCOLN MARK II",
        "description": "MARK II"
      },
      {
        "make": "LINC",
        "code": "MK3",
        "fulldescription": "LINCOLN MARK III",
        "description": "MARK III"
      },
      {
        "make": "LINC",
        "code": "MK4",
        "fulldescription": "LINCOLN MARK IV",
        "description": "MARK IV"
      },
      {
        "make": "LINC",
        "code": "MK5",
        "fulldescription": "LINCOLN MARK V",
        "description": "MARK V"
      },
      {
        "make": "LINC",
        "code": "MK6",
        "fulldescription": "LINCOLN MARK VI",
        "description": "MARK VI"
      },
      {
        "make": "LINC",
        "code": "MK7",
        "fulldescription": "LINCOLN MARK VII",
        "description": "MARK VII"
      },
      {
        "make": "LINC",
        "code": "MK8",
        "fulldescription": "LINCOLN MARK VIII",
        "description": "MARK VIII"
      },
      {
        "make": "LINC",
        "code": "PRE",
        "fulldescription": "LINCOLN PREMIERE",
        "description": "PREMIERE"
      },
      {
        "make": "LINC",
        "code": "STA",
        "fulldescription": "LINCOLN STANDARD",
        "description": "STANDARD"
      },
      {
        "make": "LINC",
        "code": "TOW",
        "fulldescription": "LINCOLN TOWN CAR",
        "description": "TOWN CAR"
      },
      {
        "make": "LINC",
        "code": "VER",
        "fulldescription": "LINCOLN VERSAILLES",
        "description": "VERSAILLES"
      },
      {
        "make": "LINC",
        "code": "ZEP",
        "fulldescription": "LINCOLN ZEPHYR",
        "description": "ZEPHYR"
      },
      {
        "make": "LINC",
        "code": "ZZZ",
        "fulldescription": "LINCOLN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MAZD",
        "code": "323",
        "fulldescription": "MAZDA 323",
        "description": "323"
      },
      {
        "make": "MAZD",
        "code": "616",
        "fulldescription": "MAZDA 6165",
        "description": "6165"
      },
      {
        "make": "MAZD",
        "code": "618",
        "fulldescription": "MAZDA 618",
        "description": "618"
      },
      {
        "make": "MERZ",
        "code": "400",
        "fulldescription": "MERCEDES-BENZ 400 SERIES",
        "description": "400 SERIES"
      },
      {
        "make": "MERZ",
        "code": "420",
        "fulldescription": "MERCEDES-BENZ 420 SERIES",
        "description": "420 SERIES"
      },
      {
        "make": "MERZ",
        "code": "450",
        "fulldescription": "MERCEDES-BENZ 450 SERIES",
        "description": "450 SERIES"
      },
      {
        "make": "MERZ",
        "code": "500",
        "fulldescription": "MERCEDES-BENZ 500 SERIES",
        "description": "500 SERIES"
      },
      {
        "make": "MERZ",
        "code": "560",
        "fulldescription": "MERCEDES-BENZ 560 SERIES",
        "description": "560 SERIES"
      },
      {
        "make": "MERZ",
        "code": "600",
        "fulldescription": "MERCEDES-BENZ 600 SERIES",
        "description": "600 SERIES"
      },
      {
        "make": "MERZ",
        "code": "C36",
        "fulldescription": "MERCEDES-BENZ C36",
        "description": "C36"
      },
      {
        "make": "MERZ",
        "code": "C22",
        "fulldescription": "MERCEDES-BENZ C220",
        "description": "C220"
      },
      {
        "make": "MERZ",
        "code": "C28",
        "fulldescription": "MERCEDES-BENZ C280",
        "description": "C280"
      },
      {
        "make": "CLAI",
        "code": "ZZZ",
        "fulldescription": "CLASSIC MOTOR CARRIAGES, INC. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CLAC",
        "code": "ZZZ",
        "fulldescription": "CLASSIC ROADSTERS, LTD. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CLEN",
        "code": "ROA",
        "fulldescription": "CLENET COACH WORKS ROADSTER",
        "description": "ROADSTER"
      },
      {
        "make": "CLUA",
        "code": "ZZZ",
        "fulldescription": "CLUA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "COMV",
        "code": "COM",
        "fulldescription": "COMMUTER VEHICLES, INC. COMUTA-CAR",
        "description": "COMUTA-CAR"
      },
      {
        "make": "COCP",
        "code": "ZZZ",
        "fulldescription": "CONCEPTOR INDUSTRIES INC UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CONN",
        "code": "ZZZ",
        "fulldescription": "CONNAUGHT",
        "description": "CONNAUGHT"
      },
      {
        "make": "CONU",
        "code": "GLX",
        "fulldescription": "CONSULIER GCP",
        "description": "GCP"
      },
      {
        "make": "CONU",
        "code": "GTP",
        "fulldescription": "CONSULIER GTP",
        "description": "GTP"
      },
      {
        "make": "CONS",
        "code": "ZZZ",
        "fulldescription": "CONTESSA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "COOP",
        "code": "ZZZ",
        "fulldescription": "COOPER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CORD",
        "code": "ZZZ",
        "fulldescription": "CORD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CROF",
        "code": "ZZZ",
        "fulldescription": "CROFTON CUB UNKNOWN",
        "description": "CUB UNKNOWN"
      },
      {
        "make": "CROS",
        "code": "ZZZ",
        "fulldescription": "CROSLEY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CUBS",
        "code": "ZZZ",
        "fulldescription": "CUBSTER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CUNN",
        "code": "ZZZ",
        "fulldescription": "CUNNIGHAM UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DAIN",
        "code": "ZZZ",
        "fulldescription": "D AND A VEHICLES, INC. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DAEW",
        "code": "ZZZ",
        "fulldescription": "DAEWOO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DAF",
        "code": "ZZZ",
        "fulldescription": "DAF UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DAIH",
        "code": "CHA",
        "fulldescription": "DAIHATSU CHARADE",
        "description": "CHARADE"
      },
      {
        "make": "DAIH",
        "code": "TK",
        "fulldescription": "DAIHATSU TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "DAIM",
        "code": "ZZZ",
        "fulldescription": "DAIMLER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DAVI",
        "code": "ZZZ",
        "fulldescription": "DAVIS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DAYO",
        "code": "MIG",
        "fulldescription": "DAYTONA MIGI",
        "description": "MIGI"
      },
      {
        "make": "DAYO",
        "code": "MOY",
        "fulldescription": "DAYTONA MOYA",
        "description": "MOYA"
      },
      {
        "make": "DB",
        "code": "ZZZ",
        "fulldescription": "D.B. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DEBO",
        "code": "ZZZ",
        "fulldescription": "DEBONAIR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DECO",
        "code": "ROA",
        "fulldescription": "DECOURVILLE ROADSTER",
        "description": "ROADSTER"
      },
      {
        "make": "DEEP",
        "code": "ZZZ",
        "fulldescription": "DEEP SANDERSON UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DELL",
        "code": "ZZZ",
        "fulldescription": "DELLOW UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DELO",
        "code": "ZZZ",
        "fulldescription": "DE LOREAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DENZ",
        "code": "ZZZ",
        "fulldescription": "DENZEL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DESO",
        "code": "ADV",
        "fulldescription": "DESOTO ADVENTURER",
        "description": "ADVENTURER"
      },
      {
        "make": "DESO",
        "code": "CUS",
        "fulldescription": "DESOTO CUSTOM",
        "description": "CUSTOM"
      },
      {
        "make": "DESO",
        "code": "DEL",
        "fulldescription": "DESOTO DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "DESO",
        "code": "FRD",
        "fulldescription": "DESOTO FIREDOM",
        "description": "FIREDOM"
      },
      {
        "make": "DESO",
        "code": "FRF",
        "fulldescription": "DESOTO FIRELITE",
        "description": "FIRELITE"
      },
      {
        "make": "DESO",
        "code": "FRS",
        "fulldescription": "DESOTO FIRESWEEP",
        "description": "FIRESWEEP"
      },
      {
        "make": "DESO",
        "code": "POW",
        "fulldescription": "DESOTO POWERMASTER",
        "description": "POWERMASTER"
      },
      {
        "make": "DETO",
        "code": "DEA",
        "fulldescription": "DETOMASO DEAUVILLE",
        "description": "DEAUVILLE"
      },
      {
        "make": "DETO",
        "code": "LON",
        "fulldescription": "DETOMASO LONGCHAMP",
        "description": "LONGCHAMP"
      },
      {
        "make": "DETO",
        "code": "MNA",
        "fulldescription": "DETOMASO MANGUSTA",
        "description": "MANGUSTA"
      },
      {
        "make": "DETO",
        "code": "PTA",
        "fulldescription": "DETOMASO PANTERA",
        "description": "PANTERA"
      },
      {
        "make": "DITE",
        "code": "ZZZ",
        "fulldescription": "DI TELLA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DIVA",
        "code": "ZZZ",
        "fulldescription": "DIVA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DKW",
        "code": "AUD",
        "fulldescription": "DKW AUDI",
        "description": "AUDI"
      },
      {
        "make": "DKW",
        "code": "102",
        "fulldescription": "DKW F102",
        "description": "F102"
      },
      {
        "make": "DKW",
        "code": "VEM",
        "fulldescription": "DKW VEMAG",
        "description": "VEMAG"
      },
      {
        "make": "DONG",
        "code": "ZZZ",
        "fulldescription": "DONG FENG (EAST WIND)",
        "description": "FENG (EAST WIND)"
      },
      {
        "make": "DUEL",
        "code": "ZZZ",
        "fulldescription": "DUEL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DUES",
        "code": "ZZZ",
        "fulldescription": "DUESENBERG UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DURA",
        "code": "ZZZ",
        "fulldescription": "DURANT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "EDSE",
        "code": "CIT",
        "fulldescription": "EDSEL CITATION",
        "description": "CITATION"
      },
      {
        "make": "EDSE",
        "code": "COR",
        "fulldescription": "EDSEL CORSAIR",
        "description": "CORSAIR"
      },
      {
        "make": "EDSE",
        "code": "PAC",
        "fulldescription": "EDSEL PACER",
        "description": "PACER"
      },
      {
        "make": "EDSE",
        "code": "RAN",
        "fulldescription": "EDSEL RANGER",
        "description": "RANGER"
      },
      {
        "make": "EDSE",
        "code": "VIL",
        "fulldescription": "EDSEL VILLAGER",
        "description": "VILLAGER"
      },
      {
        "make": "ELVC",
        "code": "ZZZ",
        "fulldescription": "ELECTRIC VEHICLE CORP. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ELVA",
        "code": "ZZZ",
        "fulldescription": "ELVA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "EMW",
        "code": "ZZZ",
        "fulldescription": "EMW UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ENGF",
        "code": "100",
        "fulldescription": "ENGLISH FORD 100 E SERIES",
        "description": "100 E SERIES"
      },
      {
        "make": "ENGF",
        "code": "105",
        "fulldescription": "ENGLISH FORD 105 E SERIES",
        "description": "105 E SERIES"
      },
      {
        "make": "ENGF",
        "code": "ANG",
        "fulldescription": "ENGLISH FORD ANGLIA",
        "description": "ANGLIA"
      },
      {
        "make": "ENGF",
        "code": "CAP",
        "fulldescription": "ENGLISH FORD CAPRI",
        "description": "CAPRI"
      },
      {
        "make": "ENGF",
        "code": "CON",
        "fulldescription": "ENGLISH FORD CONSUL",
        "description": "CONSUL"
      },
      {
        "make": "ENGF",
        "code": "COR",
        "fulldescription": "ENGLISH FORD CORSAIR",
        "description": "CORSAIR"
      },
      {
        "make": "ENGF",
        "code": "CTA",
        "fulldescription": "ENGLISH FORD CORTINA",
        "description": "CORTINA"
      },
      {
        "make": "ENGF",
        "code": "ESC",
        "fulldescription": "ENGLISH FORD ESCORT",
        "description": "ESCORT"
      },
      {
        "make": "ENGF",
        "code": "GT",
        "fulldescription": "ENGLISH FORD GT",
        "description": "GT"
      },
      {
        "make": "ENGF",
        "code": "LOT",
        "fulldescription": "ENGLISH FORD LOTUS",
        "description": "LOTUS"
      },
      {
        "make": "ENGF",
        "code": "MK2",
        "fulldescription": "ENGLISH FORD MARK II",
        "description": "MARK II"
      },
      {
        "make": "ENGF",
        "code": "PER",
        "fulldescription": "ENGLISH FORD PERFECT",
        "description": "PERFECT"
      },
      {
        "make": "ENGF",
        "code": "SQU",
        "fulldescription": "ENGLISH FORD SQUIRE",
        "description": "SQUIRE"
      },
      {
        "make": "ENGF",
        "code": "THA",
        "fulldescription": "ENGLISH FORD THAMES",
        "description": "THAMES"
      },
      {
        "make": "ENGF",
        "code": "ZEP",
        "fulldescription": "ENGLISH FORD ZEPHYR",
        "description": "ZEPHYR"
      },
      {
        "make": "ENGF",
        "code": "ZOD",
        "fulldescription": "ENGLISH FORD ZODIAC",
        "description": "ZODIAC"
      },
      {
        "make": "ENVY",
        "code": "EPI",
        "fulldescription": "ENVOY EPIC",
        "description": "EPIC"
      },
      {
        "make": "ENZM",
        "code": "ZZZ",
        "fulldescription": "ENZMANN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ERSK",
        "code": "ZZZ",
        "fulldescription": "ERSKINE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ESHL",
        "code": "ZZZ",
        "fulldescription": "ESHELMAN SPORTABOUT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ESSE",
        "code": "ZZZ",
        "fulldescription": "ESSEX UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "EVRY",
        "code": "ZZZ",
        "fulldescription": "EVERYBODY'S MOTOR CAR MFG. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "EXCL",
        "code": "JAC",
        "fulldescription": "EXCALIBUR JAC 427 COBRA",
        "description": "JAC 427 COBRA"
      },
      {
        "make": "EXCL",
        "code": "SSK",
        "fulldescription": "EXCALIBUR SSK",
        "description": "SSK"
      },
      {
        "make": "EXCL",
        "code": "SSP",
        "fulldescription": "EXCALIBUR SS PHAETON",
        "description": "SS PHAETON"
      },
      {
        "make": "EXCL",
        "code": "SSR",
        "fulldescription": "EXCALIBUR SS ROADSTER",
        "description": "SS ROADSTER"
      },
      {
        "make": "FACL",
        "code": "ZZZ",
        "fulldescription": "FACELLIA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FACE",
        "code": "ZZZ",
        "fulldescription": "FACEL-VEGA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FAIR",
        "code": "ZZZ",
        "fulldescription": "FAIRTHORPE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FALC",
        "code": "ZZZ",
        "fulldescription": "FALCON (BRITISH) UNKNOWN",
        "description": "(BRITISH) UNKNOWN"
      },
      {
        "make": "FELB",
        "code": "ZZZ",
        "fulldescription": "FELBER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FERR",
        "code": "206",
        "fulldescription": "FERRARI 206",
        "description": "206"
      },
      {
        "make": "FERR",
        "code": "208",
        "fulldescription": "FERRARI 208",
        "description": "208"
      },
      {
        "make": "FERR",
        "code": "308",
        "fulldescription": "FERRARI 308",
        "description": "308"
      },
      {
        "make": "FERR",
        "code": "328",
        "fulldescription": "FERRARI 328",
        "description": "328"
      },
      {
        "make": "FERR",
        "code": "348",
        "fulldescription": "FERRARI 348",
        "description": "348"
      },
      {
        "make": "FERR",
        "code": "456",
        "fulldescription": "FERRARI 456GT",
        "description": "456GT"
      },
      {
        "make": "FERR",
        "code": "512",
        "fulldescription": "FERRARI 512",
        "description": "512"
      },
      {
        "make": "FERR",
        "code": "DAY",
        "fulldescription": "FERRARI DAYTONA",
        "description": "DAYTONA"
      },
      {
        "make": "FERR",
        "code": "F40",
        "fulldescription": "FERRARI F40",
        "description": "F40"
      },
      {
        "make": "FERR",
        "code": "BAR",
        "fulldescription": "FERRARI F130 (BARCHETTA)",
        "description": "F130 (BARCHETTA)"
      },
      {
        "make": "FERR",
        "code": "F35",
        "fulldescription": "FERRARI F355",
        "description": "F355"
      },
      {
        "make": "FERR",
        "code": "MON",
        "fulldescription": "FERRARI MONDIAL",
        "description": "MONDIAL"
      },
      {
        "make": "FERR",
        "code": "QUA",
        "fulldescription": "FERRARI QUATTROVALVOLVE",
        "description": "QUATTROVALVOLVE"
      },
      {
        "make": "FERR",
        "code": "TES",
        "fulldescription": "FERRARI TESTAROSSA",
        "description": "TESTAROSSA"
      },
      {
        "make": "FERR",
        "code": "TIP",
        "fulldescription": "FERRARI TIPO",
        "description": "TIPO"
      },
      {
        "make": "FIAT",
        "code": "124",
        "fulldescription": "FIAT 124 SERIES",
        "description": "124 SERIES"
      },
      {
        "make": "FIAT",
        "code": "128",
        "fulldescription": "FIAT 128 SERIES",
        "description": "128 SERIES"
      },
      {
        "make": "FIAT",
        "code": "131",
        "fulldescription": "FIAT 131 SERIES",
        "description": "131 SERIES"
      },
      {
        "make": "FIAT",
        "code": "600",
        "fulldescription": "FIAT 600D",
        "description": "600D"
      },
      {
        "make": "FIAT",
        "code": "750",
        "fulldescription": "FIAT 750",
        "description": "750"
      },
      {
        "make": "FIAT",
        "code": "85F",
        "fulldescription": "FIAT 850 FASTBACK",
        "description": "850 FASTBACK"
      },
      {
        "make": "FIAT",
        "code": "SPI",
        "fulldescription": "FIAT SPIDER SERIES",
        "description": "SPIDER SERIES"
      },
      {
        "make": "FIAT",
        "code": "110",
        "fulldescription": "FIAT 1100 - D OR R",
        "description": "1100 - D OR R"
      },
      {
        "make": "FIAT",
        "code": "120",
        "fulldescription": "FIAT 1200",
        "description": "1200"
      },
      {
        "make": "FIAT",
        "code": "150",
        "fulldescription": "FIAT 1500",
        "description": "1500"
      },
      {
        "make": "FIAT",
        "code": "BRA",
        "fulldescription": "FIAT BRAVA",
        "description": "BRAVA"
      },
      {
        "make": "FIAT",
        "code": "PUN",
        "fulldescription": "FIAT PUNTO",
        "description": "PUNTO"
      },
      {
        "make": "FIAT",
        "code": "RIM",
        "fulldescription": "FIAT RIMTO",
        "description": "RIMTO"
      },
      {
        "make": "FIAT",
        "code": "STR",
        "fulldescription": "FIAT STRADA",
        "description": "STRADA"
      },
      {
        "make": "FIAT",
        "code": "UNO",
        "fulldescription": "FIAT UNO",
        "description": "UNO"
      },
      {
        "make": "FIAT",
        "code": "X19",
        "fulldescription": "FIAT X19",
        "description": "X19"
      },
      {
        "make": "FIAA",
        "code": "ZZZ",
        "fulldescription": "FIAT-ABARTH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FIBE",
        "code": "ZZZ",
        "fulldescription": "FIBERFAB, INC. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FIST",
        "code": "ZZZ",
        "fulldescription": "FIESTA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FNM",
        "code": "ZZZ",
        "fulldescription": "FNM UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FRAN",
        "code": "ZZZ",
        "fulldescription": "FRANKLIN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FRAZ",
        "code": "ZZZ",
        "fulldescription": "FRAZIER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FRNA",
        "code": "ZZZ",
        "fulldescription": "FRAZER-NASH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FREF",
        "code": "COM",
        "fulldescription": "FRENCH FORD COMETE",
        "description": "COMETE"
      },
      {
        "make": "FREF",
        "code": "VED",
        "fulldescription": "FRENCH FORD VEDETTE",
        "description": "VEDETTE"
      },
      {
        "make": "FREF",
        "code": "VEN",
        "fulldescription": "FRENCH FORD VENDOME",
        "description": "VENDOME"
      },
      {
        "make": "FRIS",
        "code": "ZZZ",
        "fulldescription": "FRISKY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GAZ",
        "code": "CHA",
        "fulldescription": "GAZ CHAIKA",
        "description": "CHAIKA"
      },
      {
        "make": "GAZ",
        "code": "VOL",
        "fulldescription": "GAZ VOLGA",
        "description": "VOLGA"
      },
      {
        "make": "GIAN",
        "code": "ZZZ",
        "fulldescription": "GIANNINI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GILB",
        "code": "ZZZ",
        "fulldescription": "GILBERN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GINE",
        "code": "ZZZ",
        "fulldescription": "GINETTA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GITA",
        "code": "ZZZ",
        "fulldescription": "GITANE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GLAS",
        "code": "GOG",
        "fulldescription": "GLASSIC GOGGOMOBILE",
        "description": "GOGGOMOBILE"
      },
      {
        "make": "GLSC",
        "code": "ZZZ",
        "fulldescription": "GLASSIC UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GOLI",
        "code": "ZZZ",
        "fulldescription": "GOLIATH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GORD",
        "code": "ZZZ",
        "fulldescription": "GORDON UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GRAC",
        "code": "ZZZ",
        "fulldescription": "GRACIELA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GRAH",
        "code": "ZZZ",
        "fulldescription": "GRAHAM UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GRAP",
        "code": "ZZZ",
        "fulldescription": "GRAHAM-PAIGE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GRIF",
        "code": "ZZZ",
        "fulldescription": "GRIFFITH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GSM",
        "code": "ZZZ",
        "fulldescription": "GSM UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HEIN",
        "code": "ZZZ",
        "fulldescription": "HEINKEL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HENR",
        "code": "ZZZ",
        "fulldescription": "HENRY J. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HICK",
        "code": "ZZZ",
        "fulldescription": "HICKEY TRAIL-BLAZER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HILL",
        "code": "160",
        "fulldescription": "HILLMAN 1600 SERIES",
        "description": "1600 SERIES"
      },
      {
        "make": "HILL",
        "code": "DEL",
        "fulldescription": "HILLMAN DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "HILL",
        "code": "HUS",
        "fulldescription": "HILLMAN HUSKY",
        "description": "HUSKY"
      },
      {
        "make": "HILL",
        "code": "IMP",
        "fulldescription": "HILLMAN IMP",
        "description": "IMP"
      },
      {
        "make": "HILL",
        "code": "MIN",
        "fulldescription": "HILLMAN MINX",
        "description": "MINX"
      },
      {
        "make": "HILL",
        "code": "SCP",
        "fulldescription": "HILLMAN SCEPTRE",
        "description": "SCEPTRE"
      },
      {
        "make": "HILL",
        "code": "SNI",
        "fulldescription": "HILLMAN SNIPE",
        "description": "SNIPE"
      },
      {
        "make": "HILL",
        "code": "SUP",
        "fulldescription": "HILLMAN SUPER MINX",
        "description": "SUPER MINX"
      },
      {
        "make": "HIND",
        "code": "ZZZ",
        "fulldescription": "HINDUSTAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HINO",
        "code": "ZZZ",
        "fulldescription": "HINO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HOLD",
        "code": "ZZZ",
        "fulldescription": "HOLDEN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HONG",
        "code": "ZZZ",
        "fulldescription": "HONGKI OR HONG-CHI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HORC",
        "code": "ZZZ",
        "fulldescription": "HORCH LIMOUSINE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HOTC",
        "code": "ZZZ",
        "fulldescription": "HOTCHKISS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HRG",
        "code": "ZZZ",
        "fulldescription": "HRG UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HUDS",
        "code": "COM",
        "fulldescription": "HUDSON COMMODORE",
        "description": "COMMODORE"
      },
      {
        "make": "HUDS",
        "code": "DEL",
        "fulldescription": "HUDSON DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "HUDS",
        "code": "HOR",
        "fulldescription": "HUDSON HORNET",
        "description": "HORNET"
      },
      {
        "make": "HUDS",
        "code": "ITA",
        "fulldescription": "HUDSON ITALIA",
        "description": "ITALIA"
      },
      {
        "make": "HUDS",
        "code": "JET",
        "fulldescription": "HUDSON JET",
        "description": "JET"
      },
      {
        "make": "HUDS",
        "code": "PAC",
        "fulldescription": "HUDSON PACEMAKER",
        "description": "PACEMAKER"
      },
      {
        "make": "HUDS",
        "code": "RAM",
        "fulldescription": "HUDSON RAMBLER",
        "description": "RAMBLER"
      },
      {
        "make": "HUDS",
        "code": "SUP",
        "fulldescription": "HUDSON SUPER",
        "description": "SUPER"
      },
      {
        "make": "HUDS",
        "code": "WAS",
        "fulldescription": "HUDSON WASP",
        "description": "WASP"
      },
      {
        "make": "HUME",
        "code": "ZZZ",
        "fulldescription": "HUMBEE SURREY UNKNOWN",
        "description": "SURREY UNKNOWN"
      },
      {
        "make": "HUMB",
        "code": "HAW",
        "fulldescription": "HUMBER HAWK",
        "description": "HAWK"
      },
      {
        "make": "HUMB",
        "code": "SNI",
        "fulldescription": "HUMBER SNIPE",
        "description": "SNIPE"
      },
      {
        "make": "HUPM",
        "code": "ZZZ",
        "fulldescription": "HUPMOBILE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "IAME",
        "code": "ZZZ",
        "fulldescription": "I. A. M. E. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "IKA",
        "code": "ZZZ",
        "fulldescription": "I. K. A. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "IMPB",
        "code": "ZZZ",
        "fulldescription": "I. M. P. (U.S.) UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "IMPE",
        "code": "CRO",
        "fulldescription": "IMPERIAL CROWN",
        "description": "CROWN"
      },
      {
        "make": "IMPE",
        "code": "CUS",
        "fulldescription": "IMPERIAL CUSTOM",
        "description": "CUSTOM"
      },
      {
        "make": "IMPE",
        "code": "LEB",
        "fulldescription": "IMPERIAL LEBARON",
        "description": "LEBARON"
      },
      {
        "make": "INFI",
        "code": "G20",
        "fulldescription": "INFINITI G20",
        "description": "G20"
      },
      {
        "make": "INFI",
        "code": "J30",
        "fulldescription": "INFINITI J30",
        "description": "J30"
      },
      {
        "make": "INFI",
        "code": "Q45",
        "fulldescription": "INFINITI Q45",
        "description": "Q45"
      },
      {
        "make": "INFI",
        "code": "M30",
        "fulldescription": "INFINITI M30",
        "description": "M30"
      },
      {
        "make": "INNO",
        "code": "ZZZ",
        "fulldescription": "INNOCENTI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "INME",
        "code": "ZZZ",
        "fulldescription": "INTERMECCANICA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "INTL",
        "code": "TK",
        "fulldescription": "INTERNATIONAL HARVESTER TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "ISET",
        "code": "ZZZ",
        "fulldescription": "ISETTA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ISO",
        "code": "ZZZ",
        "fulldescription": "ISO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ITAI",
        "code": "ZZZ",
        "fulldescription": "ITALIA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ITAF",
        "code": "ANG",
        "fulldescription": "ITALIAN FORD ANGLIA",
        "description": "ANGLIA"
      },
      {
        "make": "JENS",
        "code": "HEA",
        "fulldescription": "JENSEN HEALY",
        "description": "HEALY"
      },
      {
        "make": "JENS",
        "code": "INT",
        "fulldescription": "JENSEN INTERCEPTOR",
        "description": "INTERCEPTOR"
      },
      {
        "make": "JETM",
        "code": "ZZZ",
        "fulldescription": "JETMOBILE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "JOWE",
        "code": "ZZZ",
        "fulldescription": "JOWETT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "KAIS",
        "code": "CAR",
        "fulldescription": "KAISER CAROLINA",
        "description": "CAROLINA"
      },
      {
        "make": "KAIS",
        "code": "DAR",
        "fulldescription": "KAISER DARRIN",
        "description": "DARRIN"
      },
      {
        "make": "KAIS",
        "code": "DEL",
        "fulldescription": "KAISER DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "KAIS",
        "code": "DRA",
        "fulldescription": "KAISER DRAGON",
        "description": "DRAGON"
      },
      {
        "make": "KAIS",
        "code": "MAN",
        "fulldescription": "KAISER MANHATTAN",
        "description": "MANHATTAN"
      },
      {
        "make": "KIMI",
        "code": "ZZZ",
        "fulldescription": "KING MIDGET UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "KURT",
        "code": "ZZZ",
        "fulldescription": "KURTIS KRAFT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LADA",
        "code": "NIV",
        "fulldescription": "LADA NIVA",
        "description": "NIVA"
      },
      {
        "make": "LAGO",
        "code": "ZZZ",
        "fulldescription": "LAGONDA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LAMO",
        "code": "COU",
        "fulldescription": "LAMBORGHINI COUNTACH",
        "description": "COUNTACH"
      },
      {
        "make": "LAMO",
        "code": "DIA",
        "fulldescription": "LAMBORGHINI DIABLO",
        "description": "DIABLO"
      },
      {
        "make": "LAMO",
        "code": "JAL",
        "fulldescription": "LAMBORGHINI JALPA",
        "description": "JALPA"
      },
      {
        "make": "LAMO",
        "code": "ESP",
        "fulldescription": "LAMBORGHINI ESPADA",
        "description": "ESPADA"
      },
      {
        "make": "LAMO",
        "code": "JAR",
        "fulldescription": "LAMBORGHINI JARMA",
        "description": "JARMA"
      },
      {
        "make": "LAMO",
        "code": "MIU",
        "fulldescription": "LAMBORGHINI MIURA SV",
        "description": "MIURA SV"
      },
      {
        "make": "LANC",
        "code": "ZZZ",
        "fulldescription": "LANCHESTER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LNCI",
        "code": "BER",
        "fulldescription": "LANCIA BERLINA",
        "description": "BERLINA"
      },
      {
        "make": "LNCI",
        "code": "BET",
        "fulldescription": "LANCIA BETA SERIES",
        "description": "BETA SERIES"
      },
      {
        "make": "LNCI",
        "code": "FLA",
        "fulldescription": "LANCIA FLAVIA",
        "description": "FLAVIA"
      },
      {
        "make": "LNCI",
        "code": "FLM",
        "fulldescription": "LANCIA FLAMINIA",
        "description": "FLAMINIA"
      },
      {
        "make": "LNCI",
        "code": "FUL",
        "fulldescription": "LANCIA FULVIA",
        "description": "FULVIA"
      },
      {
        "make": "LNCI",
        "code": "ZAG",
        "fulldescription": "LANCIA ZAGATO",
        "description": "ZAGATO"
      },
      {
        "make": "LNDR",
        "code": "TK",
        "fulldescription": "LAND ROVER TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "LALL",
        "code": "ZZZ",
        "fulldescription": "LASALLE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LASE",
        "code": "ZZZ",
        "fulldescription": "LASER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LEAF",
        "code": "ZZZ",
        "fulldescription": "LEA-FRANCIS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LLOY",
        "code": "ZZZ",
        "fulldescription": "LLOYD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LOCO",
        "code": "ZZZ",
        "fulldescription": "LOCOMOBILE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LOLA",
        "code": "ZZZ",
        "fulldescription": "LOLA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LOND",
        "code": "ZZZ",
        "fulldescription": "LONDON MOTORS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LOOD",
        "code": "ZZZ",
        "fulldescription": "LOODCRAFT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LOTU",
        "code": "ELA",
        "fulldescription": "LOTUS ELAN",
        "description": "ELAN"
      },
      {
        "make": "LOTU",
        "code": "ECL",
        "fulldescription": "LOTUS ECLAT",
        "description": "ECLAT"
      },
      {
        "make": "LOTU",
        "code": "ELI",
        "fulldescription": "LOTUS ELITE",
        "description": "ELITE"
      },
      {
        "make": "LOTU",
        "code": "ESP",
        "fulldescription": "LOTUS ESPRIT",
        "description": "ESPRIT"
      },
      {
        "make": "LOTU",
        "code": "EUR",
        "fulldescription": "LOTUS EUROPA",
        "description": "EUROPA"
      },
      {
        "make": "LOTU",
        "code": "PLU",
        "fulldescription": "LOTUS PLUS TWO",
        "description": "PLUS TWO"
      },
      {
        "make": "LOTU",
        "code": "SUP",
        "fulldescription": "LOTUS SUPER 7",
        "description": "SUPER 7"
      },
      {
        "make": "MARC",
        "code": "ZZZ",
        "fulldescription": "MARCOS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MARM",
        "code": "ZZZ",
        "fulldescription": "MARMON UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MASE",
        "code": "228",
        "fulldescription": "MASERATI 228",
        "description": "228"
      },
      {
        "make": "MASE",
        "code": "425",
        "fulldescription": "MASERATI 425",
        "description": "425"
      },
      {
        "make": "MASE",
        "code": "430",
        "fulldescription": "MASERATI 430",
        "description": "430"
      },
      {
        "make": "MASE",
        "code": "200",
        "fulldescription": "MASERATI 2000 (SERIES)",
        "description": "2000 (SERIES)"
      },
      {
        "make": "MASE",
        "code": "350",
        "fulldescription": "MASERATI 3500 (SERIES)",
        "description": "3500 (SERIES)"
      },
      {
        "make": "MASE",
        "code": "400",
        "fulldescription": "MASERATI 4000 (SERIES)",
        "description": "4000 (SERIES)"
      },
      {
        "make": "MASE",
        "code": "420",
        "fulldescription": "MASERATI 4200 GT",
        "description": "4200 GT"
      },
      {
        "make": "MASE",
        "code": "500",
        "fulldescription": "MASERATI 5000 (SERIES)",
        "description": "5000 (SERIES)"
      },
      {
        "make": "MASE",
        "code": "BIT",
        "fulldescription": "MASERATI BITURBO",
        "description": "BITURBO"
      },
      {
        "make": "MASE",
        "code": "GHI",
        "fulldescription": "MASERATI GHIBLI",
        "description": "GHIBLI"
      },
      {
        "make": "MASE",
        "code": "GTI",
        "fulldescription": "MASERATI GTI SERIES",
        "description": "GTI SERIES"
      },
      {
        "make": "MASE",
        "code": "IND",
        "fulldescription": "MASERATI INDY",
        "description": "INDY"
      },
      {
        "make": "MASE",
        "code": "KHA",
        "fulldescription": "MASERATI KHAMSIN",
        "description": "KHAMSIN"
      },
      {
        "make": "MASE",
        "code": "MER",
        "fulldescription": "MASERATI MERAK",
        "description": "MERAK"
      },
      {
        "make": "MASE",
        "code": "MEX",
        "fulldescription": "MASERATI MEXICO",
        "description": "MEXICO"
      },
      {
        "make": "MASE",
        "code": "MIS",
        "fulldescription": "MASERATI MISTRELL",
        "description": "MISTRELL"
      },
      {
        "make": "MASE",
        "code": "QUA",
        "fulldescription": "MASERATI QUATTROPORTE",
        "description": "QUATTROPORTE"
      },
      {
        "make": "MASE",
        "code": "SEB",
        "fulldescription": "MASERATI SEBRING",
        "description": "SEBRING"
      },
      {
        "make": "MASE",
        "code": "SHM",
        "fulldescription": "MASERATI SHAMAL",
        "description": "SHAMAL"
      },
      {
        "make": "MASE",
        "code": "SPY",
        "fulldescription": "MASERATI SPYDER",
        "description": "SPYDER"
      },
      {
        "make": "MATA",
        "code": "ZZZ",
        "fulldescription": "MATRA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MAXL",
        "code": "ZZZ",
        "fulldescription": "MAXWELL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MBM",
        "code": "ZZZ",
        "fulldescription": "M.B.M. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MBCC",
        "code": "ZZZ",
        "fulldescription": "MCBURNIE COACH CRAFT, INC. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MEAN",
        "code": "ZZZ",
        "fulldescription": "MEAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MERK",
        "code": "SCO",
        "fulldescription": "MERKUR SCORPIO",
        "description": "SCORPIO"
      },
      {
        "make": "MERK",
        "code": "XR4",
        "fulldescription": "MERKUR XR4TI",
        "description": "XR4TI"
      },
      {
        "make": "MESS",
        "code": "KR",
        "fulldescription": "MESSERSCHMITT KR200",
        "description": "KR200"
      },
      {
        "make": "MESS",
        "code": "KR1",
        "fulldescription": "MESSERSCHMITT KR201",
        "description": "KR201"
      },
      {
        "make": "MESS",
        "code": "TIG",
        "fulldescription": "MESSERSCHMITT TIGER",
        "description": "TIGER"
      },
      {
        "make": "METE",
        "code": "COY",
        "fulldescription": "METEOR (CANADIAN MERCURY) COUNTRY SEDAN",
        "description": "COUNTRY SEDAN"
      },
      {
        "make": "METE",
        "code": "LEM",
        "fulldescription": "METEOR (CANADIAN MERCURY) LEMOYNE",
        "description": "LEMOYNE"
      },
      {
        "make": "METE",
        "code": "MON",
        "fulldescription": "METEOR (CANADIAN MERCURY) MONTCALM",
        "description": "MONTCALM"
      },
      {
        "make": "METE",
        "code": "MGO",
        "fulldescription": "METEOR (CANADIAN MERCURY) MONTEGO",
        "description": "MONTEGO"
      },
      {
        "make": "METE",
        "code": "NIA",
        "fulldescription": "METEOR (CANADIAN MERCURY) NIAGARA",
        "description": "NIAGARA"
      },
      {
        "make": "METE",
        "code": "RAW",
        "fulldescription": "METEOR (CANADIAN MERCURY) RANCH WAGON",
        "description": "RANCH WAGON"
      },
      {
        "make": "METE",
        "code": "RID",
        "fulldescription": "METEOR (CANADIAN MERCURY) RIDEAU",
        "description": "RIDEAU"
      },
      {
        "make": "METE",
        "code": "S33",
        "fulldescription": "METEOR (CANADIAN MERCURY) S-33",
        "description": "S-33"
      },
      {
        "make": "METR",
        "code": "ZZZ",
        "fulldescription": "METROPOLITAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MG",
        "code": "MG1",
        "fulldescription": "MG 1100",
        "description": "1100"
      },
      {
        "make": "MG",
        "code": "160",
        "fulldescription": "MG 1600",
        "description": "1600"
      },
      {
        "make": "MG",
        "code": "MAG",
        "fulldescription": "MG MAGNETTE",
        "description": "MAGNETTE"
      },
      {
        "make": "MG",
        "code": "MAR",
        "fulldescription": "MG MARINA",
        "description": "MARINA"
      },
      {
        "make": "MG",
        "code": "MKT",
        "fulldescription": "MG MARK II",
        "description": "MARK II"
      },
      {
        "make": "MG",
        "code": "MID",
        "fulldescription": "MG MIDGET",
        "description": "MIDGET"
      },
      {
        "make": "MG",
        "code": "MGA",
        "fulldescription": "MG MGA",
        "description": "A"
      },
      {
        "make": "MG",
        "code": "MGB",
        "fulldescription": "MG MGB",
        "description": "B"
      },
      {
        "make": "MG",
        "code": "MGG",
        "fulldescription": "MG MGB/GT",
        "description": "B/GT"
      },
      {
        "make": "MG",
        "code": "MGC",
        "fulldescription": "MG MGC",
        "description": "C"
      },
      {
        "make": "MG",
        "code": "MGT",
        "fulldescription": "MG MGC/GT",
        "description": "C/GT"
      },
      {
        "make": "MG",
        "code": "4R",
        "fulldescription": "MG PRINCESS 4-R",
        "description": "PRINCESS 4-R"
      },
      {
        "make": "MG",
        "code": "SPS",
        "fulldescription": "MG SPORTS SEDAN",
        "description": "SPORTS SEDAN"
      },
      {
        "make": "MG",
        "code": "SPR",
        "fulldescription": "MG SPRITE",
        "description": "SPRITE"
      },
      {
        "make": "MG",
        "code": "TF",
        "fulldescription": "MG TF SERIES",
        "description": "TF SERIES"
      },
      {
        "make": "MIKA",
        "code": "ZZZ",
        "fulldescription": "MIKASA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MIKR",
        "code": "ZZZ",
        "fulldescription": "MIKRUS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MIST",
        "code": "ZZZ",
        "fulldescription": "MISTRAL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MODE",
        "code": "MOD",
        "fulldescription": "MODEL A AND MODEL T MOTOR CAR REPRODUCTION CORP. MODEL A",
        "description": "MODEL A"
      },
      {
        "make": "MODE",
        "code": "THU",
        "fulldescription": "MODEL A AND MODEL T MOTOR CAR REPRODUCTION CORP. 1955 THUNDERBIRD",
        "description": "1955 THUNDERBIRD"
      },
      {
        "make": "MDNA",
        "code": "250",
        "fulldescription": "MODENA GT250",
        "description": "GT250"
      },
      {
        "make": "MONA",
        "code": "LUC",
        "fulldescription": "MONARCH LUCERNE",
        "description": "LUCERNE"
      },
      {
        "make": "MONA",
        "code": "RIC",
        "fulldescription": "MONARCH RICHELIEU",
        "description": "RICHELIEU"
      },
      {
        "make": "MONA",
        "code": "SCP",
        "fulldescription": "MONARCH SCEPTRE",
        "description": "SCEPTRE"
      },
      {
        "make": "MORE",
        "code": "ZZZ",
        "fulldescription": "MORETTI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MORG",
        "code": "MK5",
        "fulldescription": "MORGAN 4/4 MARK 5",
        "description": "4/4 MARK 5"
      },
      {
        "make": "MORG",
        "code": "PL4",
        "fulldescription": "MORGAN PLUS 4 SERIES",
        "description": "PLUS 4 SERIES"
      },
      {
        "make": "MORR",
        "code": "850",
        "fulldescription": "MORRIS 850 SERIES",
        "description": "850 SERIES"
      },
      {
        "make": "MORR",
        "code": "110",
        "fulldescription": "MORRIS 1100",
        "description": "1100"
      },
      {
        "make": "MORR",
        "code": "DEL",
        "fulldescription": "MORRIS DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "MORR",
        "code": "MII",
        "fulldescription": "MORRIS MINI SERIES",
        "description": "MINI SERIES"
      },
      {
        "make": "MORR",
        "code": "MIN",
        "fulldescription": "MORRIS MINOR",
        "description": "MINOR"
      },
      {
        "make": "MORR",
        "code": "OXF",
        "fulldescription": "MORRIS OXFORD",
        "description": "OXFORD"
      },
      {
        "make": "MORR",
        "code": "TRV",
        "fulldescription": "MORRIS TRAVELLER",
        "description": "TRAVELLER"
      },
      {
        "make": "MOSK",
        "code": "ZZZ",
        "fulldescription": "MOSKOVITCH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MUNT",
        "code": "JET",
        "fulldescription": "MUNTZ JET",
        "description": "JET"
      },
      {
        "make": "MURE",
        "code": "ZZZ",
        "fulldescription": "MURENA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MZMA",
        "code": "ZZZ",
        "fulldescription": "MZMA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "NARD",
        "code": "ZZZ",
        "fulldescription": "NARDI-DANESE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "NASH",
        "code": "AMB",
        "fulldescription": "NASH AMBASSADOR",
        "description": "AMBASSADOR"
      },
      {
        "make": "NASH",
        "code": "LAF",
        "fulldescription": "NASH LAFAYETTE",
        "description": "LAFAYETTE"
      },
      {
        "make": "NASH",
        "code": "MET",
        "fulldescription": "NASH METROPOLITAN",
        "description": "METROPOLITAN"
      },
      {
        "make": "NASH",
        "code": "RAM",
        "fulldescription": "NASH RAMBLER",
        "description": "RAMBLER"
      },
      {
        "make": "NASH",
        "code": "STA",
        "fulldescription": "NASH STATESMAN",
        "description": "STATESMAN"
      },
      {
        "make": "NAHE",
        "code": "ZZZ",
        "fulldescription": "NASH-HEALY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "NECK",
        "code": "ZZZ",
        "fulldescription": "NECKAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "NSUF",
        "code": "ZZZ",
        "fulldescription": "NSU-FIAT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "NSU",
        "code": "110",
        "fulldescription": "NSU PRINZ 110 TYPE",
        "description": "PRINZ 110 TYPE"
      },
      {
        "make": "NSU",
        "code": "100",
        "fulldescription": "NSU PRINZ 1000",
        "description": "PRINZ 1000"
      },
      {
        "make": "NSU",
        "code": "AVA",
        "fulldescription": "NSU PRINZ AUTO NOVA",
        "description": "PRINZ AUTO NOVA"
      },
      {
        "make": "NSU",
        "code": "PRI",
        "fulldescription": "NSU PRINZ PRINZ",
        "description": "PRINZ PRINZ"
      },
      {
        "make": "NSU",
        "code": "SPI",
        "fulldescription": "NSU PRINZ SPIDER (WANKEL)",
        "description": "PRINZ SPIDER (WANKEL)"
      },
      {
        "make": "OAKL",
        "code": "ZZZ",
        "fulldescription": "OAKLAND UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OGLE",
        "code": "ZZZ",
        "fulldescription": "OGLE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OHTA",
        "code": "ZZZ",
        "fulldescription": "OHTA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OMEG",
        "code": "ZZZ",
        "fulldescription": "OMEGA (ITALIAN) UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OPEL",
        "code": "190",
        "fulldescription": "OPEL 1900",
        "description": "1900"
      },
      {
        "make": "OPEL",
        "code": "CAR",
        "fulldescription": "OPEL CARAVAN",
        "description": "CARAVAN"
      },
      {
        "make": "OPEL",
        "code": "DP",
        "fulldescription": "OPEL DIPLOMAT",
        "description": "DIPLOMAT"
      },
      {
        "make": "OPEL",
        "code": "GT",
        "fulldescription": "OPEL GT",
        "description": "GT"
      },
      {
        "make": "OPEL",
        "code": "KAD",
        "fulldescription": "OPEL KADETTE",
        "description": "KADETTE"
      },
      {
        "make": "OPEL",
        "code": "KAP",
        "fulldescription": "OPEL KAPITAN",
        "description": "KAPITAN"
      },
      {
        "make": "OPEL",
        "code": "LUX",
        "fulldescription": "OPEL LUXUS",
        "description": "LUXUS"
      },
      {
        "make": "OPEL",
        "code": "MAN",
        "fulldescription": "OPEL MANTA",
        "description": "MANTA"
      },
      {
        "make": "OPEL",
        "code": "OLY",
        "fulldescription": "OPEL OLYMPIA",
        "description": "OLYMPIA"
      },
      {
        "make": "OPEL",
        "code": "RAL",
        "fulldescription": "OPEL RALLYE",
        "description": "RALLYE"
      },
      {
        "make": "OPEL",
        "code": "REK",
        "fulldescription": "OPEL REKORD",
        "description": "REKORD"
      },
      {
        "make": "OPER",
        "code": "ZZZ",
        "fulldescription": "OPEN ROADSTERS OF TEXAS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OSCA",
        "code": "ZZZ",
        "fulldescription": "OSCA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OSI",
        "code": "ZZZ",
        "fulldescription": "OSI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OTOS",
        "code": "ZZZ",
        "fulldescription": "OTOSAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OVER",
        "code": "ZZZ",
        "fulldescription": "OVERLAND UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PACK",
        "code": "BAL",
        "fulldescription": "PACKARD BALBOA",
        "description": "BALBOA"
      },
      {
        "make": "PACK",
        "code": "CAR",
        "fulldescription": "PACKARD CARIBBEAN",
        "description": "CARIBBEAN"
      },
      {
        "make": "PACK",
        "code": "CAV",
        "fulldescription": "PACKARD CAVALIER",
        "description": "CAVALIER"
      },
      {
        "make": "PACK",
        "code": "CLI",
        "fulldescription": "PACKARD CLIPPER",
        "description": "CLIPPER"
      },
      {
        "make": "PACK",
        "code": "PAT",
        "fulldescription": "PACKARD PATRICIAN",
        "description": "PATRICIAN"
      },
      {
        "make": "PACK",
        "code": "PRD",
        "fulldescription": "PACKARD PREDICTOR",
        "description": "PREDICTOR"
      },
      {
        "make": "PACK",
        "code": "REQ",
        "fulldescription": "PACKARD REQUEST",
        "description": "REQUEST"
      },
      {
        "make": "PALL",
        "code": "ZZZ",
        "fulldescription": "PALLISER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PANH",
        "code": "ZZZ",
        "fulldescription": "PANHARD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PANE",
        "code": "DEV",
        "fulldescription": "PANTHER WESTWINDS, LTD. DEVILLE",
        "description": "DEVILLE"
      },
      {
        "make": "PANE",
        "code": "J72",
        "fulldescription": "PANTHER WESTWINDS, LTD. J72",
        "description": "J72"
      },
      {
        "make": "PANE",
        "code": "KAL",
        "fulldescription": "PANTHER WESTWINDS, LTD. KILLETA",
        "description": "KILLETA"
      },
      {
        "make": "PANE",
        "code": "LIM",
        "fulldescription": "PANTHER WESTWINDS, LTD. LIMA",
        "description": "LIMA"
      },
      {
        "make": "PASS",
        "code": "OPT",
        "fulldescription": "PASSPORT OPTIMA",
        "description": "OPTIMA"
      },
      {
        "make": "PEAC",
        "code": "ZZZ",
        "fulldescription": "PEACE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PEEL",
        "code": "ZZZ",
        "fulldescription": "PEEL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PEER",
        "code": "ZZZ",
        "fulldescription": "PEERLESS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PEGA",
        "code": "ZZZ",
        "fulldescription": "PEGASO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PEUG",
        "code": "203",
        "fulldescription": "PEUGEOT 203",
        "description": "203"
      },
      {
        "make": "PEUG",
        "code": "304",
        "fulldescription": "PEUGEOT 304",
        "description": "304"
      },
      {
        "make": "PEUG",
        "code": "403",
        "fulldescription": "PEUGEOT 403",
        "description": "403"
      },
      {
        "make": "PEUG",
        "code": "404",
        "fulldescription": "PEUGEOT 404",
        "description": "404"
      },
      {
        "make": "PEUG",
        "code": "405",
        "fulldescription": "PEUGEOT 405",
        "description": "405"
      },
      {
        "make": "PEUG",
        "code": "504",
        "fulldescription": "PEUGEOT 504 SERIES",
        "description": "504 SERIES"
      },
      {
        "make": "PEUG",
        "code": "505",
        "fulldescription": "PEUGEOT 505 SERIES",
        "description": "505 SERIES"
      },
      {
        "make": "PEUG",
        "code": "604",
        "fulldescription": "PEUGEOT 604",
        "description": "604"
      },
      {
        "make": "PHOE",
        "code": "ZZZ",
        "fulldescription": "PHOENIX UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PRCA",
        "code": "ZZZ",
        "fulldescription": "PIERCE ARROW UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PINI",
        "code": "SPI",
        "fulldescription": "PINIFARINA SPIDEREUROPA",
        "description": "SPIDEREUROPA"
      },
      {
        "make": "PLAY",
        "code": "ZZZ",
        "fulldescription": "PLAYBOY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "POIR",
        "code": "ZZZ",
        "fulldescription": "POIRIER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PONI",
        "code": "FRY",
        "fulldescription": "PONTIAC (CANADIAN) FIREFLY",
        "description": "FIREFLY"
      },
      {
        "make": "PONI",
        "code": "GPA",
        "fulldescription": "PONTIAC (CANADIAN) GRAND PARISIENNE",
        "description": "GRAND PARISIENNE"
      },
      {
        "make": "PONI",
        "code": "LAU",
        "fulldescription": "PONTIAC (CANADIAN) LAURENTIAN",
        "description": "LAURENTIAN"
      },
      {
        "make": "PONI",
        "code": "PAR",
        "fulldescription": "PONTIAC (CANADIAN) PARISIENNE",
        "description": "PARISIENNE"
      },
      {
        "make": "PONI",
        "code": "STR",
        "fulldescription": "PONTIAC (CANADIAN) STRATO CHIEF",
        "description": "STRATO CHIEF"
      },
      {
        "make": "PONI",
        "code": "TEM",
        "fulldescription": "PONTIAC (CANADIAN) TEMPEST",
        "description": "TEMPEST"
      },
      {
        "make": "PRAI",
        "code": "ZZZ",
        "fulldescription": "PRAIRIE SCHOONER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PRMO",
        "code": "ZZZ",
        "fulldescription": "PRINCE MOTORS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PROG",
        "code": "ZZZ",
        "fulldescription": "PROGRESS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PTV",
        "code": "ZZZ",
        "fulldescription": "PTV UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PUCH",
        "code": "ZZZ",
        "fulldescription": "PUCH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PUMM",
        "code": "ZZZ",
        "fulldescription": "PUMA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "RAMB",
        "code": "AMB",
        "fulldescription": "RAMBLER AMBASSADOR",
        "description": "AMBASSADOR"
      },
      {
        "make": "RAMB",
        "code": "ARN",
        "fulldescription": "RAMBLER AMERICAN",
        "description": "AMERICAN"
      },
      {
        "make": "ASTO",
        "code": "DBS",
        "fulldescription": "ASTON MARTIN",
        "description": "DBS"
      },
      {
        "make": "ASTO",
        "code": "RPD",
        "fulldescription": "ASTON MARTIN",
        "description": "RAPIDE"
      },
      {
        "make": "AUDI",
        "code": "A5",
        "fulldescription": "AUDI",
        "description": "A5"
      },
      {
        "make": "AUDI",
        "code": "S5",
        "fulldescription": "AUDI",
        "description": "S5"
      },
      {
        "make": "BMW",
        "code": "ALP",
        "fulldescription": "BMW",
        "description": "ALPINA B7"
      },
      {
        "make": "BMW",
        "code": "X6",
        "fulldescription": "BMW",
        "description": "X6"
      },
      {
        "make": "BMW",
        "code": "128",
        "fulldescription": "BMW",
        "description": "128I"
      },
      {
        "make": "BMW",
        "code": "135",
        "fulldescription": "BMW",
        "description": "135I"
      },
      {
        "make": "CATE",
        "code": "R40",
        "fulldescription": "CATERHAM CAR SALES AND COACH WORKS",
        "description": "R400"
      },
      {
        "make": "CHEV",
        "code": "TRV",
        "fulldescription": "CHEVROLET",
        "description": "TRAVERSE"
      },
      {
        "make": "CLUB",
        "code": "XRT",
        "fulldescription": "CLUB CAR, INC.(NEV-NEIGHBORHOOD ELECTRIC VEHICLE)",
        "description": "XRT"
      },
      {
        "make": "DODG",
        "code": "JNY",
        "fulldescription": "DODGE",
        "description": "JOURNEY"
      },
      {
        "make": "EVNS",
        "code": "387",
        "fulldescription": "EVANS AUTOMOBILES",
        "description": "387"
      },
      {
        "make": "EVNS",
        "code": "487",
        "fulldescription": "EVANS AUTOMOBILES",
        "description": "487"
      },
      {
        "make": "FERR",
        "code": "F50",
        "fulldescription": "FERRARI",
        "description": "F50"
      },
      {
        "make": "FORD",
        "code": "F75",
        "fulldescription": "FORD",
        "description": "F750"
      },
      {
        "make": "FORD",
        "code": "FLX",
        "fulldescription": "FORD",
        "description": "FLEX"
      },
      {
        "make": "INFI",
        "code": "EX3",
        "fulldescription": "INFINITI",
        "description": "EX35"
      },
      {
        "make": "INFI",
        "code": "G37",
        "fulldescription": "INFINITI",
        "description": "G37"
      },
      {
        "make": "JAGU",
        "code": "XF",
        "fulldescription": "JAGUAR",
        "description": "XF"
      },
      {
        "make": "LEXS",
        "code": "G46",
        "fulldescription": "LEXUS",
        "description": "GS460"
      },
      {
        "make": "LEXS",
        "code": "ISF",
        "fulldescription": "LEXUS",
        "description": "IS-F"
      },
      {
        "make": "LEXS",
        "code": "L57",
        "fulldescription": "LEXUS",
        "description": "LX570"
      },
      {
        "make": "LINC",
        "code": "MKS",
        "fulldescription": "LINCOLN",
        "description": "MKS"
      },
      {
        "make": "MASE",
        "code": "GTU",
        "fulldescription": "MASERATI",
        "description": "GRAN TOURISMO"
      },
      {
        "make": "MERZ",
        "code": "C6A",
        "fulldescription": "MERCEDES-BENZ",
        "description": "C63AMG"
      },
      {
        "make": "MERZ",
        "code": "3AM",
        "fulldescription": "MERCEDES-BENZ",
        "description": "SL63AMG"
      },
      {
        "make": "MERZ",
        "code": "L30",
        "fulldescription": "MERCEDES-BENZ",
        "description": "SLK300"
      },
      {
        "make": "MIEV",
        "code": "XS5",
        "fulldescription": "MILES ELECTRIC VEHICLES",
        "description": "XS500"
      },
      {
        "make": "MIEV",
        "code": "ZX4",
        "fulldescription": "MILES ELECTRIC VEHICLES",
        "description": "ZX40S"
      },
      {
        "make": "MNNI",
        "code": "CLB",
        "fulldescription": "MINI",
        "description": "CLUBMAN"
      },
      {
        "make": "NISS",
        "code": "GTR",
        "fulldescription": "NISSAN",
        "description": "GT-R"
      },
      {
        "make": "NISS",
        "code": "RGE",
        "fulldescription": "NISSAN",
        "description": "ROGUE"
      },
      {
        "make": "PONT",
        "code": "G3",
        "fulldescription": "PONTIAC",
        "description": "G3"
      },
      {
        "make": "PONT",
        "code": "G8",
        "fulldescription": "PONTIAC",
        "description": "G8"
      },
      {
        "make": "STRN",
        "code": "100",
        "fulldescription": "SATURN",
        "description": "L100"
      },
      {
        "make": "SCIO",
        "code": "XD",
        "fulldescription": "SCION",
        "description": "XD"
      },
      {
        "make": "STU",
        "code": "BRM",
        "fulldescription": "STUDEBAKER",
        "description": "BROADMOOR"
      },
      {
        "make": "TESL",
        "code": "RDS",
        "fulldescription": "TESLA MOTORS",
        "description": "ROADSTER"
      },
      {
        "make": "TOYT",
        "code": "VNZ",
        "fulldescription": "TOYOTA",
        "description": "VENZA"
      },
      {
        "make": "VOLK",
        "code": "GLI",
        "fulldescription": "VOLKSWAGEN",
        "description": "GLI"
      },
      {
        "make": "BENT",
        "code": "GT",
        "fulldescription": "BENTLEY",
        "description": "GT"
      },
      {
        "make": "BENT",
        "code": "CNV",
        "fulldescription": "BENTLEY",
        "description": "GTC (CONVERTIBLE)"
      },
      {
        "make": "DAEW",
        "code": "G2X",
        "fulldescription": "DAEWOO",
        "description": "G2X"
      },
      {
        "make": "HYUN",
        "code": "VCZ",
        "fulldescription": "HYUNDAI",
        "description": "VERACRUZ"
      },
      {
        "make": "JEEP",
        "code": "CJ2",
        "fulldescription": "JEEP",
        "description": "CJ2"
      },
      {
        "make": "LEXS",
        "code": "L60",
        "fulldescription": "LEXUS",
        "description": "LS600HL"
      },
      {
        "make": "MAYB",
        "code": "57",
        "fulldescription": "MAYBACH",
        "description": "57 AND 57S"
      },
      {
        "make": "MAYB",
        "code": "62",
        "fulldescription": "MAYBACH",
        "description": "62 AND 62S"
      },
      {
        "make": "MERZ",
        "code": "C30",
        "fulldescription": "MERCEDES-BENZ",
        "description": "C300"
      },
      {
        "make": "MERZ",
        "code": "C63",
        "fulldescription": "MERCEDES-BENZ",
        "description": "CL63AMG"
      },
      {
        "make": "MERZ",
        "code": "GL5",
        "fulldescription": "MERCEDES-BENZ",
        "description": "GL550"
      },
      {
        "make": "MERZ",
        "code": "M55",
        "fulldescription": "MERCEDES-BENZ",
        "description": "ML550"
      },
      {
        "make": "MERZ",
        "code": "63A",
        "fulldescription": "MERCEDES-BENZ",
        "description": "S63AMG"
      },
      {
        "make": "NASH",
        "code": "AIR",
        "fulldescription": "NASH",
        "description": "AIRFLYTE"
      },
      {
        "make": "OPEL",
        "code": "OMG",
        "fulldescription": "OPEL",
        "description": "OMEGA"
      },
      {
        "make": "OPEL",
        "code": "VCT",
        "fulldescription": "OPEL",
        "description": "VECTRA"
      },
      {
        "make": "RUFA",
        "code": "CTR",
        "fulldescription": "RUF AUTOMOBILES OF AMERICA",
        "description": "CTR3"
      },
      {
        "make": "RUFA",
        "code": "RGT",
        "fulldescription": "RUF AUTOMOBILES OF AMERICA",
        "description": "RGT"
      },
      {
        "make": "RUFA",
        "code": "RK",
        "fulldescription": "RUF AUTOMOBILES OF AMERICA",
        "description": "RK COUPE"
      },
      {
        "make": "RUFA",
        "code": "RT1",
        "fulldescription": "RUF AUTOMOBILES OF AMERICA",
        "description": "RT12"
      },
      {
        "make": "ZAPP",
        "code": "XBA",
        "fulldescription": "ZAP",
        "description": "XEBRA"
      },
      {
        "make": "BMW",
        "code": "335",
        "fulldescription": "BMW 335IH",
        "description": "335IH"
      },
      {
        "make": "CHEV",
        "code": "MRV",
        "fulldescription": "CHEVROLET",
        "description": "MERIVA"
      },
      {
        "make": "ERID",
        "code": "XV2",
        "fulldescription": "E-RIDE INDUSTRIES (ELECTRIC VEHICLES)",
        "description": "XV2"
      },
      {
        "make": "ERID",
        "code": "XV4",
        "fulldescription": "E-RIDE INDUSTRIES (ELECTRIC VEHICLES)",
        "description": "XV4"
      },
      {
        "make": "GLBL",
        "code": "E2",
        "fulldescription": "GLOBAL ELECTRIC MOTOR CARS",
        "description": "E2"
      },
      {
        "make": "GLBL",
        "code": "E4",
        "fulldescription": "GLOBAL ELECTRIC MOTOR CARS",
        "description": "E4"
      },
      {
        "make": "GLBL",
        "code": "E6",
        "fulldescription": "GLOBAL ELECTRIC MOTOR CARS",
        "description": "E6"
      },
      {
        "make": "GLBL",
        "code": "EL",
        "fulldescription": "GLOBAL ELECTRIC MOTOR CARS",
        "description": "EL"
      },
      {
        "make": "GLBL",
        "code": "ELX",
        "fulldescription": "GLOBAL ELECTRIC MOTOR CARS",
        "description": "ELXD"
      },
      {
        "make": "GLBL",
        "code": "ES",
        "fulldescription": "GLOBAL ELECTRIC MOTOR CARS",
        "description": "ES"
      },
      {
        "make": "ISU",
        "code": "290",
        "fulldescription": "ISUZU",
        "description": "I290"
      },
      {
        "make": "ISU",
        "code": "370",
        "fulldescription": "ISUZU",
        "description": "I370"
      },
      {
        "make": "LEXS",
        "code": "G35",
        "fulldescription": "LEXUS",
        "description": "GS350"
      },
      {
        "make": "LEXS",
        "code": "L46",
        "fulldescription": "LEXUS",
        "description": "LS460"
      },
      {
        "make": "LINC",
        "code": "MKX",
        "fulldescription": "LINCOLN",
        "description": "MKX"
      },
      {
        "make": "LINC",
        "code": "MKZ",
        "fulldescription": "LINCOLN",
        "description": "MKZ"
      },
      {
        "make": "LOTU",
        "code": "EXG",
        "fulldescription": "LOTUS",
        "description": "EXIGE"
      },
      {
        "make": "MASE",
        "code": "M12",
        "fulldescription": "MASERATI",
        "description": "MC12"
      },
      {
        "make": "MERZ",
        "code": "32A",
        "fulldescription": "MERCEDES-BENZ",
        "description": "C32 AMG"
      },
      {
        "make": "MERZ",
        "code": "GL3",
        "fulldescription": "MERCEDES-BENZ",
        "description": "GL320"
      },
      {
        "make": "MERZ",
        "code": "55A",
        "fulldescription": "MERCEDES-BENZ",
        "description": "SL55 AMG"
      },
      {
        "make": "NISS",
        "code": "PLT",
        "fulldescription": "NISSAN",
        "description": "PLATINA"
      },
      {
        "make": "STRN",
        "code": "AST",
        "fulldescription": "SATURN",
        "description": "ASTRA"
      },
      {
        "make": "VOLV",
        "code": "C30",
        "fulldescription": "VOLVO",
        "description": "C30"
      },
      {
        "make": "ZENN",
        "code": "ZEN",
        "fulldescription": "ZENN MOTOR CO., LTD.",
        "description": "ZENN (ZERO EMISSION, NO NOISE)"
      },
      {
        "make": "KIA",
        "code": "SOL",
        "fulldescription": "KIA MOTOR CORPORATION. SOUL",
        "description": "SOUL"
      },
      {
        "make": "KIA",
        "code": "FRT",
        "fulldescription": "KIA MOTOR CORPORATION. FORTE",
        "description": "FORTE"
      },
      {
        "make": "ACUR",
        "code": "RLX",
        "fulldescription": "ACURA RLX",
        "description": "RLX"
      },
      {
        "make": "ALFA",
        "code": "4C",
        "fulldescription": "ALFA ROMEO 4C",
        "description": "4C"
      },
      {
        "make": "AUDI",
        "code": "RS5",
        "fulldescription": "AUDI RS5",
        "description": "RS5"
      },
      {
        "make": "AUDI",
        "code": "RS7",
        "fulldescription": "AUDI RS7",
        "description": "RS7"
      },
      {
        "make": "AUDI",
        "code": "S7",
        "fulldescription": "AUDI S7",
        "description": "AS7"
      },
      {
        "make": "BMW",
        "code": "ACT",
        "fulldescription": "BMW ACTIVE E",
        "description": "ACTIVE E"
      },
      {
        "make": "CADI",
        "code": "ELR",
        "fulldescription": "CADILLAC ELR",
        "description": "ELR"
      },
      {
        "make": "CADI",
        "code": "XTS",
        "fulldescription": "CADILLAC XTS",
        "description": "XTS"
      },
      {
        "make": "CHEV",
        "code": "SS",
        "fulldescription": "CHEVROLET SS",
        "description": "SS"
      },
      {
        "make": "CHEV",
        "code": "TRX",
        "fulldescription": "CHEVROLET TRAX",
        "description": "TRAX"
      },
      {
        "make": "HOLD",
        "code": "VLT",
        "fulldescription": "HOLDEN VOLT",
        "description": "VOLT"
      },
      {
        "make": "INFI",
        "code": "E37",
        "fulldescription": "INFINITI EX37",
        "description": "EX37"
      },
      {
        "make": "INFI",
        "code": "F37",
        "fulldescription": "INFINITI FX37",
        "description": "FX37"
      },
      {
        "make": "INFI",
        "code": "Q50",
        "fulldescription": "INFINITI Q50",
        "description": "Q50"
      },
      {
        "make": "INFI",
        "code": "Q60",
        "fulldescription": "INFINITI Q60",
        "description": "Q60"
      },
      {
        "make": "INFI",
        "code": "QX5",
        "fulldescription": "INFINITI QX50",
        "description": "QX50"
      },
      {
        "make": "INFI",
        "code": "QX6",
        "fulldescription": "INFINITI QX60",
        "description": "QX60"
      },
      {
        "make": "INFI",
        "code": "QX7",
        "fulldescription": "INFINITI QX70",
        "description": "QX70"
      },
      {
        "make": "INFI",
        "code": "QX8",
        "fulldescription": "INFINITI QX80",
        "description": "QX80"
      },
      {
        "make": "JAGU",
        "code": "FTY",
        "fulldescription": "JAGUAR F-TYPE",
        "description": "F-TYPE"
      },
      {
        "make": "KIA",
        "code": "CDZ",
        "fulldescription": "KIA CADENZA",
        "description": "CADENZA"
      },
      {
        "make": "LEXS",
        "code": "ISC",
        "fulldescription": "LEXUS ISC",
        "description": "ISC"
      },
      {
        "make": "MERZ",
        "code": "G63",
        "fulldescription": "MERCEDES-BENZ GL63 AMG",
        "description": "GL63 AMG"
      },
      {
        "make": "MERZ",
        "code": "GK2",
        "fulldescription": "MERCEDES-BENZ GLK250",
        "description": "GLK250"
      },
      {
        "make": "MNNI",
        "code": "PCM",
        "fulldescription": "MINI PACEMAN, PACEMAN S, PACEMAN ALL 4",
        "description": "PACEMAN, PACEMAN S, PACEMAN ALL 4"
      },
      {
        "make": "NISS",
        "code": "N20",
        "fulldescription": "NISSAN NV200",
        "description": "NV200"
      },
      {
        "make": "RAM",
        "code": "150",
        "fulldescription": "RAM 1500",
        "description": "1500"
      },
      {
        "make": "RAM",
        "code": "250",
        "fulldescription": "RAM 2500",
        "description": "2500"
      },
      {
        "make": "RAM",
        "code": "350",
        "fulldescription": "RAM 3500",
        "description": "3500"
      },
      {
        "make": "RAM",
        "code": "450",
        "fulldescription": "RAM 4500",
        "description": "4500"
      },
      {
        "make": "RAM",
        "code": "550",
        "fulldescription": "RAM 5500",
        "description": "5500"
      },
      {
        "make": "RAM",
        "code": "RCV",
        "fulldescription": "RAM MPV CARGO VAN",
        "description": "MPV CARGO VAN"
      },
      {
        "make": "SUBA",
        "code": "CTK",
        "fulldescription": "SUBARU XV CROSSTREK",
        "description": "XV CROSSTREK"
      },
      {
        "make": "TESL",
        "code": "TS",
        "fulldescription": "TESLA MOTORS MODEL S",
        "description": "MODEL S"
      },
      {
        "make": "ULTS",
        "code": "CAN",
        "fulldescription": "ULTIMA SPORTS LIMITED CAN-AM",
        "description": "CAN-AM"
      },
      {
        "make": "ULTS",
        "code": "GTR",
        "fulldescription": "ULTIMA SPORTS GTR",
        "description": "GTR"
      },
      {
        "make": "ULTS",
        "code": "SPY",
        "fulldescription": "ULTIMA SPORTS SPYDER",
        "description": "SPYDER"
      },
      {
        "make": "NISS",
        "code": "ARM",
        "fulldescription": "NISSAN ARMADA",
        "description": "ARMADA"
      },
      {
        "make": "NISS",
        "code": "VRS",
        "fulldescription": "NISSAN VERSA",
        "description": "VERSA"
      },
      {
        "make": "PONT",
        "code": "SOL",
        "fulldescription": "PONTIAC SOLSTICE",
        "description": "SOLSTICE"
      },
      {
        "make": "PONT",
        "code": "TOR",
        "fulldescription": "PONTIAC TORRENT",
        "description": "TORRENT"
      },
      {
        "make": "PONT",
        "code": "G4",
        "fulldescription": "PONTIAC G4",
        "description": "G4"
      },
      {
        "make": "PONT",
        "code": "G5",
        "fulldescription": "PONTIAC G5",
        "description": "G5"
      },
      {
        "make": "PORS",
        "code": "CAY",
        "fulldescription": "PORSCHE CAYMAN",
        "description": "CAYMAN"
      },
      {
        "make": "STRN",
        "code": "SKY",
        "fulldescription": "SATURN SKY",
        "description": "SKY"
      },
      {
        "make": "STRN",
        "code": "AUR",
        "fulldescription": "SATURN AURA, XE, XR",
        "description": "AURA, XE, XR"
      },
      {
        "make": "STRN",
        "code": "OUT",
        "fulldescription": "SATURN OUTLOOK",
        "description": "OUTLOOK"
      },
      {
        "make": "SUBA",
        "code": "TRB",
        "fulldescription": "SUBARU B9 TRIBECA",
        "description": "B9 TRIBECA"
      },
      {
        "make": "SUBA",
        "code": "OUT",
        "fulldescription": "SUBARU OUTBACK",
        "description": "OUTBACK"
      },
      {
        "make": "SUZI",
        "code": "SX4",
        "fulldescription": "SUZUKI SX4",
        "description": "SX4"
      },
      {
        "make": "TLCC",
        "code": "TAL",
        "fulldescription": "TLC CARROSSIERS TALBO",
        "description": "TALBO"
      },
      {
        "make": "TOYT",
        "code": "FJC",
        "fulldescription": "TOYOTA FJ CRUISER",
        "description": "FJ CRUISER"
      },
      {
        "make": "TOYT",
        "code": "YAR",
        "fulldescription": "TOYOTA YARIS",
        "description": "YARIS"
      },
      {
        "make": "VOLK",
        "code": "PNT",
        "fulldescription": "VOLKSWAGON POINTER",
        "description": "POINTER"
      },
      {
        "make": "AUDI",
        "code": "Q7",
        "fulldescription": "AUDI Q7",
        "description": "Q7"
      },
      {
        "make": "AUDI",
        "code": "R8",
        "fulldescription": "AUDI R8",
        "description": "R8"
      },
      {
        "make": "BENT",
        "code": "FPR",
        "fulldescription": "BENTLY FLYING SPUR",
        "description": "FLYING SPUR"
      },
      {
        "make": "BUGA",
        "code": "VYR",
        "fulldescription": "BUGATTI VEYRON",
        "description": "VEYRON"
      },
      {
        "make": "FERR",
        "code": "430",
        "fulldescription": "FERRARI 430 COUPE AND SPIDER",
        "description": "430 COUPE AND SPIDER"
      },
      {
        "make": "FERR",
        "code": "599",
        "fulldescription": "FERRARI 599 GTB FIORANO",
        "description": "599 GTB FIORANO"
      },
      {
        "make": "FORD",
        "code": "EDG",
        "fulldescription": "FORD EDGE",
        "description": "EDGE"
      },
      {
        "make": "GMC",
        "code": "ACA",
        "fulldescription": "GMC ACADIA",
        "description": "ACADIA"
      },
      {
        "make": "KIA",
        "code": "RON",
        "fulldescription": "KIA RONDO",
        "description": "RONDO"
      },
      {
        "make": "LNCI",
        "code": "DEL",
        "fulldescription": "LANCIA DELTA",
        "description": "DELTA"
      },
      {
        "make": "LNDR",
        "code": "LR2",
        "fulldescription": "LAND ROVER LR2",
        "description": "LR2"
      },
      {
        "make": "LEXS",
        "code": "E35",
        "fulldescription": "LEXUS ES350",
        "description": "ES350"
      },
      {
        "make": "MAZD",
        "code": "CX9",
        "fulldescription": "MAZDA CX9",
        "description": "CX9"
      },
      {
        "make": "MERZ",
        "code": "550",
        "fulldescription": "MERCEDES BENZ CL550",
        "description": "CL550"
      },
      {
        "make": "MERZ",
        "code": "K55",
        "fulldescription": "MERCEDES BENZ CLK63 AMG",
        "description": "CLK63 AMG"
      },
      {
        "make": "MERZ",
        "code": "K63",
        "fulldescription": "MERCEDES BENZ CLK63 AMG",
        "description": "CLK63 AMG"
      },
      {
        "make": "MERZ",
        "code": "L55",
        "fulldescription": "MERCEDES BENZ CLS550",
        "description": "CLS550"
      },
      {
        "make": "MERZ",
        "code": "S63",
        "fulldescription": "MERCEDES BENZ CLS63 AMG",
        "description": "CLS63 AMG"
      },
      {
        "make": "MERZ",
        "code": "E5",
        "fulldescription": "MERCEDES BENZ E550",
        "description": "E550"
      },
      {
        "make": "MERZ",
        "code": "E63",
        "fulldescription": "MERCEDES BENZ E63 AMG",
        "description": "E63 AMG"
      },
      {
        "make": "MERZ",
        "code": "GL4",
        "fulldescription": "MERCEDES BENZ GL450",
        "description": "GL450"
      },
      {
        "make": "MERZ",
        "code": "L63",
        "fulldescription": "MERCEDES BENZ ML63 AMG",
        "description": "ML63 AMG"
      },
      {
        "make": "MERZ",
        "code": "R32",
        "fulldescription": "MERCEDES BENZ R320 (SPORTWAGON)",
        "description": "R320 (SPORTWAGON)"
      },
      {
        "make": "MERZ",
        "code": "R50",
        "fulldescription": "MERCEDES BENZ R500 (SPORTWAGON)",
        "description": "R500 (SPORTWAGON)"
      },
      {
        "make": "MERZ",
        "code": "R63",
        "fulldescription": "MERCEDES BENZ R63 AMG",
        "description": "R63 AMG"
      },
      {
        "make": "MERZ",
        "code": "S50",
        "fulldescription": "MERCEDES BENZ S550",
        "description": "S550"
      },
      {
        "make": "MERZ",
        "code": "65A",
        "fulldescription": "MERCEDES BENZ S65 AMG",
        "description": "S65 AMG"
      },
      {
        "make": "MOSL",
        "code": "900",
        "fulldescription": "MOSLER MT900",
        "description": "MT900"
      },
      {
        "make": "VOLK",
        "code": "EOS",
        "fulldescription": "VLOKSWAGON EOS",
        "description": "EOS"
      },
      {
        "make": "BMW",
        "code": "750",
        "fulldescription": "BMW 750 SERIES",
        "description": "750 SERIES"
      },
      {
        "make": "FERR",
        "code": "CAL",
        "fulldescription": "FERRARI CALIFORNIA",
        "description": "CALIFORNIA"
      },
      {
        "make": "FORD",
        "code": "FIE",
        "fulldescription": "FORD FIESTA",
        "description": "FIESTA"
      },
      {
        "make": "GMC",
        "code": "S15",
        "fulldescription": "GMC S15",
        "description": "S15"
      },
      {
        "make": "GMC",
        "code": "TRN",
        "fulldescription": "GMC TERRAIN",
        "description": "TERRAIN"
      },
      {
        "make": "HOND",
        "code": "ACC",
        "fulldescription": "HONDA ACCORD, HONDA ACCORD CROSSTOUR",
        "description": "ACCORD, ACCORD CROSSTOUR"
      },
      {
        "make": "LEXS",
        "code": "GX4",
        "fulldescription": "LEXUS GX460",
        "description": "GX460"
      },
      {
        "make": "SMRT",
        "code": "FTW",
        "fulldescription": "SMART FORTWO",
        "description": "FORTWO"
      },
      {
        "make": "SUZI",
        "code": "JIM",
        "fulldescription": "SUZUKI JIMNY",
        "description": "JIMNY"
      },
      {
        "make": "SUZI",
        "code": "KIZ",
        "fulldescription": "SUZUKI KIZASHI",
        "description": "KIZASHI"
      },
      {
        "make": "WHGO",
        "code": "WHP",
        "fulldescription": "WHEEGO ELECTRIC CARS WHIP",
        "description": "WHIP"
      },
      {
        "make": "ACUR",
        "code": "ILX",
        "fulldescription": "ACURA ILX",
        "description": "ILX"
      },
      {
        "make": "AMER",
        "code": "TRS",
        "fulldescription": "AMERICAN MOTORS TOURIST",
        "description": "TOURIST"
      },
      {
        "make": "AMER",
        "code": "TRV",
        "fulldescription": "AMERICAN MOTORS TRAVELLER",
        "description": "TRAVELLER"
      },
      {
        "make": "AUDI",
        "code": "A7",
        "fulldescription": "AUDI A7",
        "description": "A7"
      },
      {
        "make": "AUDI",
        "code": "TRS",
        "fulldescription": "AUDI TTRS",
        "description": "TTRS"
      },
      {
        "make": "BMW",
        "code": "640",
        "fulldescription": "BMW 640I",
        "description": "640I"
      },
      {
        "make": "BUIC",
        "code": "ECR",
        "fulldescription": "BUICK ENCORE",
        "description": "ENCORE"
      },
      {
        "make": "CADI",
        "code": "ATS",
        "fulldescription": "CADILLAC ATS",
        "description": "ATS"
      },
      {
        "make": "FORD",
        "code": "CMX",
        "fulldescription": "FORD C-MAX (HYBRID AND ENERGI)",
        "description": "C-MAX (HYBRID AND ENERGI"
      },
      {
        "make": "INFI",
        "code": "JX3",
        "fulldescription": "INFINITI JX35",
        "description": "JX35"
      },
      {
        "make": "LNCI",
        "code": "THM",
        "fulldescription": "LANCIA THEMA",
        "description": "THEMA"
      },
      {
        "make": "LNDR",
        "code": "EVQ",
        "fulldescription": "LAND ROVER EVOQUE",
        "description": "EVOQUE"
      },
      {
        "make": "MAZD",
        "code": "CX5",
        "fulldescription": "MAZDA CX-5",
        "description": "CX-5"
      },
      {
        "make": "MCLA",
        "code": "MP4",
        "fulldescription": "MCLAREN AUTOMOTIVE MP4-12C",
        "description": "MP4-12C"
      },
      {
        "make": "MERZ",
        "code": "C25",
        "fulldescription": "MERCEDES-BENZ C250",
        "description": "C250"
      },
      {
        "make": "MERZ",
        "code": "G35",
        "fulldescription": "MERCEDES-BENZ GL350",
        "description": "GL350"
      },
      {
        "make": "MERZ",
        "code": "SK2",
        "fulldescription": "MERCEDES-BENZ SLK250",
        "description": "SLK250"
      },
      {
        "make": "MITS",
        "code": "IEV",
        "fulldescription": "MITSUBISHI I(MIEV)",
        "description": "I(MIEV)"
      },
      {
        "make": "NISS",
        "code": "NV1",
        "fulldescription": "NISSAN NV1500",
        "description": "NV1500"
      },
      {
        "make": "NISS",
        "code": "NV2",
        "fulldescription": "NISSAN NV2500",
        "description": "NV2500"
      },
      {
        "make": "NISS",
        "code": "NV3",
        "fulldescription": "NISSAN NV3500",
        "description": "NV3500"
      },
      {
        "make": "SCIO",
        "code": "FRS",
        "fulldescription": "SCION FRS",
        "description": "FRS"
      },
      {
        "make": "SUBA",
        "code": "BRZ",
        "fulldescription": "SUBARU BRZ",
        "description": "BRZ"
      },
      {
        "make": "BMW",
        "code": "650",
        "fulldescription": "BMW 650 SERIES",
        "description": "650 SERIES"
      },
      {
        "make": "DELG",
        "code": "D8",
        "fulldescription": "DELAGE D8-100 AND D8-120",
        "description": "DELAGE D8-100 AND D8-120"
      },
      {
        "make": "ENVO",
        "code": "S90",
        "fulldescription": "ENVEMO SUPER 90",
        "description": "SUPER 90"
      },
      {
        "make": "ROSN",
        "code": "Q1",
        "fulldescription": "ROSSION/ROSSION AUTOMOTIVE",
        "description": "Q1"
      },
      {
        "make": "ACUR",
        "code": "ZDX",
        "fulldescription": "ACURA ZDX",
        "description": "ZDX"
      },
      {
        "make": "BMW",
        "code": "X3",
        "fulldescription": "BMW X3",
        "description": "X3"
      },
      {
        "make": "BMW",
        "code": "Z4",
        "fulldescription": "BMW Z4",
        "description": "Z4"
      },
      {
        "make": "CHEV",
        "code": "VLT",
        "fulldescription": "CHEVROLET VOLT",
        "description": "VOLT"
      },
      {
        "make": "BMW",
        "code": "X1",
        "fulldescription": "BMW X1",
        "description": "X1"
      },
      {
        "make": "BUIC",
        "code": "VER",
        "fulldescription": "BUICK VERANO",
        "description": "VERANO"
      },
      {
        "make": "CHEV",
        "code": "CHY",
        "fulldescription": "CHEVROLET CHEYENNE",
        "description": "CHEYENNE"
      },
      {
        "make": "CHEV",
        "code": "CRZ",
        "fulldescription": "CHEVROLET CRUZE",
        "description": "CRUZE"
      },
      {
        "make": "CHEV",
        "code": "ORL",
        "fulldescription": "CHEVROLET ORLANDO",
        "description": "ORLANDO"
      },
      {
        "make": "CHEV",
        "code": "SON",
        "fulldescription": "CHEVROLET SONIC",
        "description": "SONIC"
      },
      {
        "make": "CHRY",
        "code": "200",
        "fulldescription": "CHRYSLER 200",
        "description": "200"
      },
      {
        "make": "FERR",
        "code": "458",
        "fulldescription": "FERRARI 458 ITALIA",
        "description": "458 ITALIA"
      },
      {
        "make": "FIAT",
        "code": "FRE",
        "fulldescription": "FIAT FREEMONT",
        "description": "FREEMONT"
      },
      {
        "make": "FIAT",
        "code": "500",
        "fulldescription": "FIAT 500",
        "description": "500"
      },
      {
        "make": "GRET",
        "code": "MYC",
        "fulldescription": "GREENTECH AUTOMOTIVE, INC.",
        "description": "MY CAR"
      },
      {
        "make": "HYUN",
        "code": "VEL",
        "fulldescription": "HYUNDAI VELOSTER",
        "description": "VELOSTER"
      },
      {
        "make": "LAMO",
        "code": "AVT",
        "fulldescription": "LAMBORGHINI AVENTADOR",
        "description": "AVENTADOR"
      },
      {
        "make": "LNCI",
        "code": "LC3",
        "fulldescription": "LANCIA 300C",
        "description": "300C"
      },
      {
        "make": "LNCI",
        "code": "RT5",
        "fulldescription": "LANCIA RT53",
        "description": "RT53"
      },
      {
        "make": "LEXS",
        "code": "LFA",
        "fulldescription": "LEXUS LFA",
        "description": "LFA"
      },
      {
        "make": "LOTU",
        "code": "2EL",
        "fulldescription": "LOTUS 2 ELEVEN",
        "description": "2 ELEVEN"
      },
      {
        "make": "MAZD",
        "code": "MZ2",
        "fulldescription": "MAZDA",
        "description": "MAZDA"
      },
      {
        "make": "NISS",
        "code": "LEF",
        "fulldescription": "NISSAN LEAF",
        "description": "LEAF"
      },
      {
        "make": "OPEL",
        "code": "AMP",
        "fulldescription": "OPEL AMPERA(ELECTRIC VEH.)",
        "description": "AMPERA(ELECTRIC VEH.)"
      },
      {
        "make": "ROL",
        "code": "GHO",
        "fulldescription": "ROLLS-ROYCE GHOST",
        "description": "GHOST"
      },
      {
        "make": "SCIO",
        "code": "IQ",
        "fulldescription": "SCION IQ",
        "description": "IQ"
      },
      {
        "make": "THNK",
        "code": "CTY",
        "fulldescription": "THINK NORTH AMERICA, INC. CITY",
        "description": "CITY"
      },
      {
        "make": "VHPG",
        "code": "MVI",
        "fulldescription": "VEHICLE PRODUCTION GROUP, LLC MV-1",
        "description": "MV-1"
      },
      {
        "make": "SCIO",
        "code": "ZZZ",
        "fulldescription": "SCION UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TRIU",
        "code": "HER",
        "fulldescription": "TRIUMPH HERALD",
        "description": "HERALD"
      },
      {
        "make": "TRIU",
        "code": "SPI",
        "fulldescription": "TRIUMPH SPITFIRE",
        "description": "SPITFIRE"
      },
      {
        "make": "TRIU",
        "code": "SP6",
        "fulldescription": "TRIUMPH SPORT \"6\"",
        "description": "SPORT \"6\""
      },
      {
        "make": "TRIU",
        "code": "STA",
        "fulldescription": "TRIUMPH STAG",
        "description": "STAG"
      },
      {
        "make": "TRIU",
        "code": "TR3",
        "fulldescription": "TRIUMPH TR-3 AND TR-3A",
        "description": "TR-3 AND TR-3A"
      },
      {
        "make": "TRIU",
        "code": "TR4",
        "fulldescription": "TRIUMPH TR-4 AND TR-4A",
        "description": "TR-4 AND TR-4A"
      },
      {
        "make": "TRIU",
        "code": "TR6",
        "fulldescription": "TRIUMPH TR6",
        "description": "TR6"
      },
      {
        "make": "TRIU",
        "code": "TR7",
        "fulldescription": "TRIUMPH TR7",
        "description": "TR7"
      },
      {
        "make": "TRIU",
        "code": "TR8",
        "fulldescription": "TRIUMPH TR8",
        "description": "TR8"
      },
      {
        "make": "TRIU",
        "code": "VIT",
        "fulldescription": "TRIUMPH VITESSE",
        "description": "VITESSE"
      },
      {
        "make": "TRUM",
        "code": "ZZZ",
        "fulldescription": "TRIUMPH MOTOR CO. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TROJ",
        "code": "ZZZ",
        "fulldescription": "TROJAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TUCK",
        "code": "ZZZ",
        "fulldescription": "TUCKER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TURN",
        "code": "ZZZ",
        "fulldescription": "TURNER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TVR",
        "code": "VIX",
        "fulldescription": "TVR VIXEN",
        "description": "VIXEN"
      },
      {
        "make": "TVR",
        "code": "TUS",
        "fulldescription": "TVR TUSCAN",
        "description": "TUSCAN"
      },
      {
        "make": "TZ",
        "code": "ZZZ",
        "fulldescription": "TZ UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "UNIC",
        "code": "ZZZ",
        "fulldescription": "UNICAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "UNIP",
        "code": "ZZZ",
        "fulldescription": "UNIPOWER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CCMV",
        "code": "TK",
        "fulldescription": "CROSS COUNTRY MILITARY VEHICLES TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "USEL",
        "code": "LTC",
        "fulldescription": "U.S. ELECTRICAR CORP. LECTRIC LEOPARD",
        "description": "LECTRIC LEOPARD"
      },
      {
        "make": "VAL",
        "code": "ZZZ",
        "fulldescription": "VAL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VALK",
        "code": "ZZZ",
        "fulldescription": "VALKRIE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VNDN",
        "code": "ZZZ",
        "fulldescription": "VANDEN PLAS UNKNOWN",
        "description": "PLAS UNKNOWN"
      },
      {
        "make": "VANG",
        "code": "DEL",
        "fulldescription": "VANGUARD DELUXE",
        "description": "DELUXE"
      },
      {
        "make": "VANG",
        "code": "ENS",
        "fulldescription": "VANGUARD ENSIGN",
        "description": "ENSIGN"
      },
      {
        "make": "VANG",
        "code": "LUX",
        "fulldescription": "VANGUARD LUXURY",
        "description": "LUXURY"
      },
      {
        "make": "VANG",
        "code": "MK3",
        "fulldescription": "VANGUARD MARK III",
        "description": "MARK III"
      },
      {
        "make": "VAUX",
        "code": "CRE",
        "fulldescription": "VAUXHALL CRESTA",
        "description": "CRESTA"
      },
      {
        "make": "VAUX",
        "code": "ENV",
        "fulldescription": "VAUXHALL ENVOY",
        "description": "ENVOY"
      },
      {
        "make": "VAUX",
        "code": "EPC",
        "fulldescription": "VAUXHALL EPIC",
        "description": "EPIC"
      },
      {
        "make": "VAUX",
        "code": "FIR",
        "fulldescription": "VAUXHALL FIRENZA",
        "description": "FIRENZA"
      },
      {
        "make": "VAUX",
        "code": "VEL",
        "fulldescription": "VAUXHALL VELOX",
        "description": "VELOX"
      },
      {
        "make": "VAUX",
        "code": "VIC",
        "fulldescription": "VAUXHALL VICTOR",
        "description": "VICTOR"
      },
      {
        "make": "VAUX",
        "code": "VIV",
        "fulldescription": "VAUXHALL VIVA",
        "description": "VIVA"
      },
      {
        "make": "VACR",
        "code": "VEC",
        "fulldescription": "VECTOR AEROMOTIVE CORPORATION VECTOR",
        "description": "VECTOR"
      },
      {
        "make": "VERI",
        "code": "ZZZ",
        "fulldescription": "VERITAS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VESP",
        "code": "ZZZ",
        "fulldescription": "VESPA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VOGA",
        "code": "ZZZ",
        "fulldescription": "VOLGA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WARS",
        "code": "ZZZ",
        "fulldescription": "WARSZAWA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WART",
        "code": "ZZZ",
        "fulldescription": "WARTBURG UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WARW",
        "code": "ZZZ",
        "fulldescription": "WARWICK UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WATF",
        "code": "ZZZ",
        "fulldescription": "WATFORD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WEND",
        "code": "ZZZ",
        "fulldescription": "WENDAX UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WHIP",
        "code": "ZZZ",
        "fulldescription": "WHIPPET UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WLLS",
        "code": "ZZZ",
        "fulldescription": "WILLYS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WILS",
        "code": "ZZZ",
        "fulldescription": "WILSON UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WOLS",
        "code": "ZZZ",
        "fulldescription": "WOLSELEY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WOOD",
        "code": "ZZZ",
        "fulldescription": "WOODILL WILDFIRE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WORT",
        "code": "ZZZ",
        "fulldescription": "WORTHINGTON CHAMP UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "YENK",
        "code": "ZZZ",
        "fulldescription": "YENKO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "YLN",
        "code": "ZZZ",
        "fulldescription": "YLN (YUE LOONG MOTOR CO.) UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ZAPO",
        "code": "ZZZ",
        "fulldescription": "ZAPOROZHETS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ZARC",
        "code": "ZZZ",
        "fulldescription": "ZAR CAR UNKNOWN",
        "description": "CAR UNKNOWN"
      },
      {
        "make": "ZCZY",
        "code": "YUG",
        "fulldescription": "ZASTAVIA (ZCZ-YUGOSLAVIA) YUGO (SERIES)",
        "description": "YUGO (SERIES)"
      },
      {
        "make": "ZETA",
        "code": "ZZZ",
        "fulldescription": "ZETA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ZIL",
        "code": "ZZZ",
        "fulldescription": "ZIL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ZIM",
        "code": "ZZZ",
        "fulldescription": "ZIM UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ZIMR",
        "code": "ZZZ",
        "fulldescription": "ZIMMERMAN AUTOMOBILES UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ZUND",
        "code": "ZZZ",
        "fulldescription": "ZUNDAPP UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ZWIC",
        "code": "ZZZ",
        "fulldescription": "ZWICKAU UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HODA",
        "code": "CYL",
        "fulldescription": "HODAKA MOTORCYCLE",
        "description": "MOTORCYCLE"
      },
      {
        "make": "HD",
        "code": "CYL",
        "fulldescription": "HARLEY-DAVIDSON MOTORCYCLE",
        "description": "MOTORCYCLE"
      },
      {
        "make": "HUSQ",
        "code": "CYL",
        "fulldescription": "HUSQVARNA MOTORCYCLE",
        "description": "MOTORCYCLE"
      },
      {
        "make": "RECO",
        "code": "CYL",
        "fulldescription": "RECONSTRUCTED MOTORCYCLE MOTORCYCLE",
        "description": "MOTORCYCLE MOTORCYCLE"
      },
      {
        "make": "SUZI",
        "code": "CYL",
        "fulldescription": "SUZUKI MOTORCYCLE",
        "description": "MOTORCYCLE"
      },
      {
        "make": "BMW",
        "code": "CYL",
        "fulldescription": "BMW (GERMANY) MOTORCYCLE",
        "description": "(GERMANY) MOTORCYCLE"
      },
      {
        "make": "HOND",
        "code": "CYL",
        "fulldescription": "HONDA (JAPAN) MOTORCYCLE",
        "description": "(JAPAN) MOTORCYCLE"
      },
      {
        "make": "KAWK",
        "code": "CYL",
        "fulldescription": "KAWASAKI (JAPAN)  MOTORCYCLE",
        "description": "(JAPAN)  MOTORCYCLE"
      },
      {
        "make": "HOND",
        "code": "CRV",
        "fulldescription": "HONDA CRV",
        "description": "CRV"
      },
      {
        "make": "HOND",
        "code": "EVP",
        "fulldescription": "HONDA EVPLUS",
        "description": "EVPLUS"
      },
      {
        "make": "HOND",
        "code": "ODY",
        "fulldescription": "HONDA ODYSSEY",
        "description": "ODYSSEY"
      },
      {
        "make": "HOND",
        "code": "PAS",
        "fulldescription": "HONDA PASSPORT",
        "description": "PASSPORT"
      },
      {
        "make": "TOYT",
        "code": "4RN",
        "fulldescription": "TOYOTA 4RUNNER",
        "description": "4RUNNER"
      },
      {
        "make": "TOYT",
        "code": "CAV",
        "fulldescription": "TOYOTA CAVALIER",
        "description": "CAVALIER"
      },
      {
        "make": "TOYT",
        "code": "RAV",
        "fulldescription": "TOYOTA RAV4",
        "description": "RAV4"
      },
      {
        "make": "TOYT",
        "code": "SNA",
        "fulldescription": "TOYOTA SIENNA(VAN)",
        "description": "SIENNA(VAN)"
      },
      {
        "make": "TOYT",
        "code": "SOL",
        "fulldescription": "TOYOTA SOLARA",
        "description": "SOLARA"
      },
      {
        "make": "TOYT",
        "code": "SR5",
        "fulldescription": "TOYOTA SR5",
        "description": "SR5"
      },
      {
        "make": "TOYT",
        "code": "T10",
        "fulldescription": "TOYOTA T100",
        "description": "T100"
      },
      {
        "make": "TOYT",
        "code": "TAC",
        "fulldescription": "TOYOTA TACOMA",
        "description": "TACOMA"
      },
      {
        "make": "FORD",
        "code": "AER",
        "fulldescription": "FORD AEROSTAR",
        "description": "AEROSTAR"
      },
      {
        "make": "FORD",
        "code": "BRO",
        "fulldescription": "FORD BRONCO/BRONCOII",
        "description": "BRONCO/BRONCOII"
      },
      {
        "make": "FORD",
        "code": "CW1",
        "fulldescription": "FORD CLUB WAGON E150",
        "description": "CLUB WAGON E150"
      },
      {
        "make": "FORD",
        "code": "CW2",
        "fulldescription": "FORD CLUB WAGON E250",
        "description": "CLUB WAGON E250"
      },
      {
        "make": "FORD",
        "code": "CW3",
        "fulldescription": "FORD CLUB WAGON E350",
        "description": "CLUB WAGON E350"
      },
      {
        "make": "FORD",
        "code": "ECO",
        "fulldescription": "FORD ECONOLINE E100",
        "description": "ECONOLINE E100"
      },
      {
        "make": "FORD",
        "code": "EC1",
        "fulldescription": "FORD ECONOLINE E150",
        "description": "ECONOLINE E150"
      },
      {
        "make": "FORD",
        "code": "EC2",
        "fulldescription": "FORD ECONOLINE E250",
        "description": "ECONOLINE E250"
      },
      {
        "make": "FORD",
        "code": "EC3",
        "fulldescription": "FORD ECONOLINE E350",
        "description": "ECONOLINE E350"
      },
      {
        "make": "FORD",
        "code": "XPL",
        "fulldescription": "FORD EXPLORER",
        "description": "EXPLORER"
      },
      {
        "make": "FORD",
        "code": "F10",
        "fulldescription": "FORD F100",
        "description": "F100"
      },
      {
        "make": "FORD",
        "code": "F15",
        "fulldescription": "FORD F150",
        "description": "F150"
      },
      {
        "make": "FORD",
        "code": "F25",
        "fulldescription": "FORD F250",
        "description": "F250"
      },
      {
        "make": "FORD",
        "code": "F35",
        "fulldescription": "FORD F350",
        "description": "F350"
      },
      {
        "make": "FORD",
        "code": "F45",
        "fulldescription": "FORD F450",
        "description": "F450"
      },
      {
        "make": "FORD",
        "code": "F55",
        "fulldescription": "FORD F550",
        "description": "F550"
      },
      {
        "make": "FORD",
        "code": "FOC",
        "fulldescription": "FORD FOCUS",
        "description": "FOCUS"
      },
      {
        "make": "FORD",
        "code": "KA",
        "fulldescription": "FORD KA",
        "description": "KA"
      },
      {
        "make": "FORD",
        "code": "RNG",
        "fulldescription": "FORD RANGER",
        "description": "RANGER"
      },
      {
        "make": "FORD",
        "code": "WIN",
        "fulldescription": "FORD WINDSTAR",
        "description": "WINDSTAR"
      },
      {
        "make": "CHEV",
        "code": "AST",
        "fulldescription": "CHEVROLET ASTRO VAN",
        "description": "ASTRO VAN"
      },
      {
        "make": "CHEV",
        "code": "BLZ",
        "fulldescription": "CHEVROLET BLAZER",
        "description": "BLAZER"
      },
      {
        "make": "CHEV",
        "code": "C10",
        "fulldescription": "CHEVROLET C10",
        "description": "C10"
      },
      {
        "make": "CHEV",
        "code": "C15",
        "fulldescription": "CHEVROLET C/K 1500",
        "description": "C/K 1500"
      },
      {
        "make": "CHEV",
        "code": "C25",
        "fulldescription": "CHEVROLET C/K 2500",
        "description": "C/K 2500"
      },
      {
        "make": "CHEV",
        "code": "C35",
        "fulldescription": "CHEVROLET C/K 3500",
        "description": "C/K 3500"
      },
      {
        "make": "CHEV",
        "code": "EXP",
        "fulldescription": "CHEVROLET EXPRESS",
        "description": "EXPRESS"
      },
      {
        "make": "CHEV",
        "code": "CRS",
        "fulldescription": "CHEVROLET CORSICA",
        "description": "CORSICA"
      },
      {
        "make": "CHEV",
        "code": "LMA",
        "fulldescription": "CHEVROLET LUMINA APV",
        "description": "LUMINA APV"
      },
      {
        "make": "CHEV",
        "code": "LUV",
        "fulldescription": "CHEVROLET LUV",
        "description": "LUV"
      },
      {
        "make": "CHEV",
        "code": "MET",
        "fulldescription": "CHEVROLET METRO",
        "description": "METRO"
      },
      {
        "make": "CHEV",
        "code": "PRI",
        "fulldescription": "CHEVROLET PRIZM",
        "description": "PRIZM"
      },
      {
        "make": "CHEV",
        "code": "S10",
        "fulldescription": "CHEVROLET S10",
        "description": "S10"
      },
      {
        "make": "CHEV",
        "code": "SLV",
        "fulldescription": "CHEVROLET SILVERADO",
        "description": "SILVERADO"
      },
      {
        "make": "CHEV",
        "code": "SPT",
        "fulldescription": "CHEVROLET SPORTVAN",
        "description": "SPORTVAN"
      },
      {
        "make": "CHEV",
        "code": "SUB",
        "fulldescription": "CHEVROLET SUBURBAN",
        "description": "SUBURBAN"
      },
      {
        "make": "CHEV",
        "code": "TAH",
        "fulldescription": "CHEVROLET TAHOE",
        "description": "TAHOE"
      },
      {
        "make": "CHEV",
        "code": "TRK",
        "fulldescription": "CHEVROLET TRACKER",
        "description": "TRACKER"
      },
      {
        "make": "CHEV",
        "code": "VEN",
        "fulldescription": "CHEVROLET VENTURE",
        "description": "VENTURE"
      },
      {
        "make": "CHRY",
        "code": "PRW",
        "fulldescription": "CHRYSLER PROWLER",
        "description": "PROWLER"
      },
      {
        "make": "CHRY",
        "code": "TNC",
        "fulldescription": "CHRYSLER TOWN AND COUNTRY MINIVAN",
        "description": "TOWN AND COUNTRY MINIVAN"
      },
      {
        "make": "HYUN",
        "code": "AVA",
        "fulldescription": "HYUNDAI AVATAR",
        "description": "AVATAR"
      },
      {
        "make": "HYUN",
        "code": "TIB",
        "fulldescription": "HYUNDAI TIBURON",
        "description": "TIBURON"
      },
      {
        "make": "CADI",
        "code": "CAT",
        "fulldescription": "CADILLAC CATERA",
        "description": "CATERA"
      },
      {
        "make": "ACUR",
        "code": "CL",
        "fulldescription": "ACURA CL",
        "description": "CL"
      },
      {
        "make": "ACUR",
        "code": "RL",
        "fulldescription": "ACURA RL",
        "description": "RL"
      },
      {
        "make": "ACUR",
        "code": "SLX",
        "fulldescription": "ACURA SLX",
        "description": "SLX"
      },
      {
        "make": "ACUR",
        "code": "ATL",
        "fulldescription": "ACURA TL",
        "description": "TL"
      },
      {
        "make": "AMER",
        "code": "HUM",
        "fulldescription": "AMERICAN MOTORS HUMMER",
        "description": "MOTORS HUMMER"
      },
      {
        "make": "AUDI",
        "code": "AA8",
        "fulldescription": "AUDI A8",
        "description": "A8"
      },
      {
        "make": "BMW",
        "code": "328",
        "fulldescription": "BMW 328IS",
        "description": "328IS"
      },
      {
        "make": "BMW",
        "code": "Z3",
        "fulldescription": "BMW Z3",
        "description": "Z3"
      },
      {
        "make": "DODG",
        "code": "CVN",
        "fulldescription": "DODGE CARAVAN",
        "description": "CARAVAN"
      },
      {
        "make": "DODG",
        "code": "DAK",
        "fulldescription": "DODGE DAKOTA",
        "description": "DAKOTA"
      },
      {
        "make": "DODG",
        "code": "DUR",
        "fulldescription": "DODGE DURANGO",
        "description": "DURANGO"
      },
      {
        "make": "DODG",
        "code": "PRM",
        "fulldescription": "DODGE POWER RAM",
        "description": "POWER RAM"
      },
      {
        "make": "DODG",
        "code": "RDR",
        "fulldescription": "DODGE RAIDER",
        "description": "RAIDER"
      },
      {
        "make": "DODG",
        "code": "R15",
        "fulldescription": "DODGE RAM 1500 PU",
        "description": "RAM 1500 PU"
      },
      {
        "make": "DODG",
        "code": "R25",
        "fulldescription": "DODGE RAM 2500 PU",
        "description": "RAM 2500 PU"
      },
      {
        "make": "DODG",
        "code": "R35",
        "fulldescription": "DODGE RAM 3500 PU",
        "description": "RAM 3500 PU"
      },
      {
        "make": "DODG",
        "code": "V15",
        "fulldescription": "DODGE RAM 1500 VAN",
        "description": "RAM 1500 VAN"
      },
      {
        "make": "DODG",
        "code": "V25",
        "fulldescription": "DODGE RAM 2500 VAN",
        "description": "RAM 2500 VAN"
      },
      {
        "make": "DODG",
        "code": "V35",
        "fulldescription": "DODGE RAM 3500 VAN",
        "description": "RAM 3500 VAN"
      },
      {
        "make": "DODG",
        "code": "RCH",
        "fulldescription": "DODGE RAMCHARGER",
        "description": "RAMCHARGER"
      },
      {
        "make": "ASTO",
        "code": "DB7",
        "fulldescription": "ASTON-MARTIN DB-7(COUPE)",
        "description": "DB-7(COUPE)"
      },
      {
        "make": "BENT",
        "code": "ARN",
        "fulldescription": "BENTLEY ARNAGE",
        "description": "ARNAGE"
      },
      {
        "make": "BESA",
        "code": "BAC",
        "fulldescription": "BESASI BACI",
        "description": "BESASI BACI"
      },
      {
        "make": "BUGA",
        "code": "E10",
        "fulldescription": "BUGATTI EB110",
        "description": "EB110"
      },
      {
        "make": "DAEW",
        "code": "LAN",
        "fulldescription": "DAEWOO LANOS",
        "description": "LANOS"
      },
      {
        "make": "DAEW",
        "code": "LEG",
        "fulldescription": "DAEWOO LEGANZA",
        "description": "LEGANZA"
      },
      {
        "make": "DAEW",
        "code": "NUB",
        "fulldescription": "DAEWOO NUBIRA",
        "description": "NUBIRA"
      },
      {
        "make": "DAIH",
        "code": "RKY",
        "fulldescription": "DAIHATSU ROCKY",
        "description": "ROCKY"
      },
      {
        "make": "DATS",
        "code": "LIL",
        "fulldescription": "DATSUN LIL HUSTLER",
        "description": "LIL HUSTLER"
      },
      {
        "make": "EXCL",
        "code": "COB",
        "fulldescription": "EXCALIBUR COBRA",
        "description": "COBRA"
      },
      {
        "make": "FERR",
        "code": "MAR",
        "fulldescription": "FERRARI F-550 MARANELLO",
        "description": "F-550 MARANELLO"
      },
      {
        "make": "GAZ",
        "code": "RAG",
        "fulldescription": "GAZ RAGE",
        "description": "RAGE"
      },
      {
        "make": "GMC",
        "code": "DEN",
        "fulldescription": "GENERAL MOTOR CORP. DENALI",
        "description": "DENALI"
      },
      {
        "make": "GMC",
        "code": "ENV",
        "fulldescription": "GENERAL MOTOR CORP. ENVOY",
        "description": "ENVOY"
      },
      {
        "make": "GMC",
        "code": "EV1",
        "fulldescription": "GENERAL MOTOR CORP. EV1",
        "description": "EV1"
      },
      {
        "make": "GMC",
        "code": "JMY",
        "fulldescription": "GENERAL MOTOR CORP. JIMMY",
        "description": "JIMMY"
      },
      {
        "make": "GMC",
        "code": "RLY",
        "fulldescription": "GENERAL MOTOR CORP. RALLY",
        "description": "RALLY"
      },
      {
        "make": "GMC",
        "code": "SAF",
        "fulldescription": "GENERAL MOTOR CORP. SAFARI",
        "description": "SAFARI"
      },
      {
        "make": "GMC",
        "code": "SAV",
        "fulldescription": "GENERAL MOTOR CORP. SAVANNA VAN",
        "description": "SAVANNA VAN"
      },
      {
        "make": "GMC",
        "code": "SRA",
        "fulldescription": "GENERAL MOTOR CORP. SIERRA",
        "description": "SIERRA"
      },
      {
        "make": "GMC",
        "code": "SON",
        "fulldescription": "GENERAL MOTOR CORP. SONOMA",
        "description": "SONOMA"
      },
      {
        "make": "GMC",
        "code": "SUB",
        "fulldescription": "GENERAL MOTOR CORP. SUBURBAN",
        "description": "SUBURBAN"
      },
      {
        "make": "GMC",
        "code": "TYP",
        "fulldescription": "GENERAL MOTOR CORP. TYPHOON",
        "description": "TYPHOON"
      },
      {
        "make": "GMC",
        "code": "VAN",
        "fulldescription": "GENERAL MOTOR CORP. VANDURA",
        "description": "VANDURA"
      },
      {
        "make": "GMC",
        "code": "YUK",
        "fulldescription": "GENERAL MOTOR CORP. YUKON",
        "description": "YUKON"
      },
      {
        "make": "GEO",
        "code": "TRK",
        "fulldescription": "GEO TRACKER",
        "description": "TRACKER"
      },
      {
        "make": "INFI",
        "code": "I30",
        "fulldescription": "INFINITI I30",
        "description": "I30"
      },
      {
        "make": "INFI",
        "code": "QX4",
        "fulldescription": "INFINITI QX4",
        "description": "QX4"
      },
      {
        "make": "ISU",
        "code": "AMG",
        "fulldescription": "ISUZU AMIGO",
        "description": "AMIGO"
      },
      {
        "make": "ISU",
        "code": "HOM",
        "fulldescription": "ISUZU HOMBRE",
        "description": "HOMBRE"
      },
      {
        "make": "ISU",
        "code": "OAS",
        "fulldescription": "ISUZU OASIS",
        "description": "OASIS"
      },
      {
        "make": "ISU",
        "code": "ROD",
        "fulldescription": "ISUZU RODEO",
        "description": "RODEO"
      },
      {
        "make": "ISU",
        "code": "TRP",
        "fulldescription": "ISUZU TROOPER",
        "description": "TROOPER"
      },
      {
        "make": "KIA",
        "code": "SPT",
        "fulldescription": "KIA MOTOR CORPORATION SPORTAGE",
        "description": "SPORTAGE"
      },
      {
        "make": "LEXS",
        "code": "GS4",
        "fulldescription": "LEXUS GS400",
        "description": "GS400"
      },
      {
        "make": "LEXS",
        "code": "L45",
        "fulldescription": "LEXUS LX450",
        "description": "LX450"
      },
      {
        "make": "LEXS",
        "code": "L47",
        "fulldescription": "LEXUS LX470",
        "description": "LX470"
      },
      {
        "make": "LEXS",
        "code": "RX3",
        "fulldescription": "LEXUS RX300",
        "description": "RX300"
      },
      {
        "make": "MAZD",
        "code": "MPV",
        "fulldescription": "MAZDA MPV",
        "description": "MPV"
      },
      {
        "make": "MAZD",
        "code": "NAV",
        "fulldescription": "MAZDA NAVAJO",
        "description": "NAVAJO"
      },
      {
        "make": "MERC",
        "code": "MTN",
        "fulldescription": "MERCURY MOUNTAINEER",
        "description": "MOUNTAINEER"
      },
      {
        "make": "MERC",
        "code": "VGR",
        "fulldescription": "MERCURY VILLAGER MINIVAN",
        "description": "VILLAGER MINIVAN"
      },
      {
        "make": "MERZ",
        "code": "C23",
        "fulldescription": "MERCEDES-BENZ C230",
        "description": "C230"
      },
      {
        "make": "MERZ",
        "code": "CL4",
        "fulldescription": "MERCEDES-BENZ CLK430",
        "description": "CLK430"
      },
      {
        "make": "MERZ",
        "code": "E30",
        "fulldescription": "MERCEDES-BENZ E300",
        "description": "E300"
      },
      {
        "make": "MERZ",
        "code": "E32",
        "fulldescription": "MERCEDES-BENZ E320",
        "description": "E320"
      },
      {
        "make": "MERZ",
        "code": "E42",
        "fulldescription": "MERCEDES-BENZ E420",
        "description": "E420"
      },
      {
        "make": "MERZ",
        "code": "E43",
        "fulldescription": "MERCEDES-BENZ E430",
        "description": "E430"
      },
      {
        "make": "MITS",
        "code": "MON",
        "fulldescription": "MITSUBISHI MONTERO/MONTERO SPORT",
        "description": "MONTERO/MONTERO SPORT"
      },
      {
        "make": "NISS",
        "code": "FRT",
        "fulldescription": "NISSAN FRONTIER",
        "description": "FRONTIER"
      },
      {
        "make": "NISS",
        "code": "PTH",
        "fulldescription": "NISSAN PATHFINDER",
        "description": "PATHFINDER"
      },
      {
        "make": "NISS",
        "code": "SE",
        "fulldescription": "NISSAN SE",
        "description": "SE"
      },
      {
        "make": "NISS",
        "code": "QST",
        "fulldescription": "NISSAN QUEST",
        "description": "QUEST"
      },
      {
        "make": "NISS",
        "code": "XE",
        "fulldescription": "NISSAN XE",
        "description": "XE"
      },
      {
        "make": "OLDS",
        "code": "ALO",
        "fulldescription": "OLDSMOBILE ALERO",
        "description": "ALERO"
      },
      {
        "make": "OLDS",
        "code": "BVD",
        "fulldescription": "OLDSMOBILE BRAVADO",
        "description": "BRAVADO"
      },
      {
        "make": "OLDS",
        "code": "INT",
        "fulldescription": "OLDSMOBILE INTRIGUE",
        "description": "INTRIGUE"
      },
      {
        "make": "OLDS",
        "code": "SIL",
        "fulldescription": "OLDSMOBILE SILHOUETTE",
        "description": "SILHOUETTE"
      },
      {
        "make": "PLYM",
        "code": "VOY",
        "fulldescription": "PLYMOUTH VOYAGER",
        "description": "VOYAGER"
      },
      {
        "make": "PONI",
        "code": "SAF",
        "fulldescription": "PONTIAC (CANADIAN) SAFARI",
        "description": "SAFARI"
      },
      {
        "make": "PONT",
        "code": "TSP",
        "fulldescription": "PONTIAC TRANSSPORT",
        "description": "TRANSSPORT"
      },
      {
        "make": "ROL",
        "code": "FPR",
        "fulldescription": "ROLLS-ROYCE FLYING SPUR",
        "description": "FLYING SPUR"
      },
      {
        "make": "ROL",
        "code": "SER",
        "fulldescription": "ROLLS-ROYCE SILVER SERAPH",
        "description": "SILVER SERAPH"
      },
      {
        "make": "SUZI",
        "code": "EST",
        "fulldescription": "SUZUKI ESTEEM",
        "description": "ESTEEM"
      },
      {
        "make": "SUZI",
        "code": "GVT",
        "fulldescription": "SUZUKI GRAND VITARA",
        "description": "GRAND VITARA"
      },
      {
        "make": "SUZI",
        "code": "SAM",
        "fulldescription": "SUZUKI SAMURAI",
        "description": "SAMURAI"
      },
      {
        "make": "SUZI",
        "code": "SDK",
        "fulldescription": "SUZUKI SIDEKICK",
        "description": "SIDEKICK"
      },
      {
        "make": "SUZI",
        "code": "VIT",
        "fulldescription": "SUZUKI VITARA",
        "description": "VITARA"
      },
      {
        "make": "SUZI",
        "code": "X90",
        "fulldescription": "SUZUKI X-90",
        "description": "X-90"
      },
      {
        "make": "VACR",
        "code": "M12",
        "fulldescription": "VECTOR AEROMOTIVE CORPORATION M12",
        "description": "M12"
      },
      {
        "make": "VOLK",
        "code": "EUR",
        "fulldescription": "VOLKSWAGEN EUROVAN",
        "description": "EUROVAN"
      },
      {
        "make": "VOLK",
        "code": "VGN",
        "fulldescription": "VOLKSWAGEN VANAGON",
        "description": "VANAGON"
      },
      {
        "make": "VOLV",
        "code": "C70",
        "fulldescription": "VOLVO C70",
        "description": "C70"
      },
      {
        "make": "VOLV",
        "code": "S70",
        "fulldescription": "VOLVO S70",
        "description": "S70"
      },
      {
        "make": "VOLV",
        "code": "S80",
        "fulldescription": "VOLVO S80",
        "description": "S80"
      },
      {
        "make": "VOLV",
        "code": "S90",
        "fulldescription": "VOLVO S90",
        "description": "S90"
      },
      {
        "make": "VOLV",
        "code": "V70",
        "fulldescription": "VOLVO V70",
        "description": "V70"
      },
      {
        "make": "VOLV",
        "code": "V90",
        "fulldescription": "VOLVO V90",
        "description": "V90"
      },
      {
        "make": "AC",
        "code": "ZZZ",
        "fulldescription": "A C (GREAT BRITIAN) UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ACAD",
        "code": "ZZZ",
        "fulldescription": "ACADIAN UNKNOWN",
        "description": "ACADIAN UNKNOWN"
      },
      {
        "make": "ALFA",
        "code": "ZZZ",
        "fulldescription": "ALFA ROMEO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ASTO",
        "code": "ZZZ",
        "fulldescription": "ASTON-MARTIN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ASUN",
        "code": "ZZZ",
        "fulldescription": "ASUNA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AUHE",
        "code": "ZZZ",
        "fulldescription": "AUSTIN-HEALY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AUST",
        "code": "ZZZ",
        "fulldescription": "AUSTIN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AVTI",
        "code": "ZZZ",
        "fulldescription": "AVANTI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BENT",
        "code": "ZZZ",
        "fulldescription": "BENTLEY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BERO",
        "code": "ZZZ",
        "fulldescription": "BERTONE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BMC",
        "code": "ZZZ",
        "fulldescription": "B M C UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BORG",
        "code": "ZZZ",
        "fulldescription": "BORGWARD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BREM",
        "code": "ZZZ",
        "fulldescription": "BREMEN SPORT EQUIPMENT, INC. (BREMEN, IN) UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BZEL",
        "code": "ZZZ",
        "fulldescription": "B AND Z ELECTRIC CAR CO. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CCMV",
        "code": "ZZZ",
        "fulldescription": "CROSS COUNTRY MILITARY VEHICLES UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CHEC",
        "code": "ZZZ",
        "fulldescription": "CHECKER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CITR",
        "code": "ZZZ",
        "fulldescription": "CITROEN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CLEN",
        "code": "ZZZ",
        "fulldescription": "CLENET COACH WORKS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "COMV",
        "code": "ZZZ",
        "fulldescription": "COMMUTER VEHICLES, INC. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CONU",
        "code": "ZZZ",
        "fulldescription": "CONSULIER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DAIH",
        "code": "ZZZ",
        "fulldescription": "DAIHATSU UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DAYO",
        "code": "ZZZ",
        "fulldescription": "DAYTONA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DECO",
        "code": "ZZZ",
        "fulldescription": "DECOURVILLE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DESO",
        "code": "ZZZ",
        "fulldescription": "DESOTO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DETO",
        "code": "ZZZ",
        "fulldescription": "DETOMASO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DKW",
        "code": "ZZZ",
        "fulldescription": "DKW UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "EDSE",
        "code": "ZZZ",
        "fulldescription": "EDSEL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ENGF",
        "code": "ZZZ",
        "fulldescription": "ENGLISH FORD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ENVY",
        "code": "ZZZ",
        "fulldescription": "ENVOY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "EXCL",
        "code": "ZZZ",
        "fulldescription": "EXCALIBUR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FERR",
        "code": "ZZZ",
        "fulldescription": "FERRARI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FIAT",
        "code": "ZZZ",
        "fulldescription": "FIAT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FREF",
        "code": "ZZZ",
        "fulldescription": "FRENCH FORD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GAZ",
        "code": "ZZZ",
        "fulldescription": "GAZ UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GLAS",
        "code": "ZZZ",
        "fulldescription": "GLASSIC UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HILL",
        "code": "ZZZ",
        "fulldescription": "HILLMAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HODA",
        "code": "ZZZ",
        "fulldescription": "HODAKA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HUDS",
        "code": "ZZZ",
        "fulldescription": "HUDSON UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HUMB",
        "code": "ZZZ",
        "fulldescription": "HUMBER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HUSQ",
        "code": "ZZZ",
        "fulldescription": "HUSQVARNA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "IMPE",
        "code": "ZZZ",
        "fulldescription": "IMPERIAL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "INFI",
        "code": "ZZZ",
        "fulldescription": "INFINITI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "INTL",
        "code": "ZZZ",
        "fulldescription": "INTERNATIONAL HARVESTER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ITAF",
        "code": "ZZZ",
        "fulldescription": "ITALIAN FORD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "JEEP",
        "code": "ZZZ",
        "fulldescription": "JEEP UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "JENS",
        "code": "ZZZ",
        "fulldescription": "JENSEN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "KAIS",
        "code": "ZZZ",
        "fulldescription": "KAISER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LADA",
        "code": "ZZZ",
        "fulldescription": "LADA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LAMO",
        "code": "ZZZ",
        "fulldescription": "LAMBORGHINI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LNCI",
        "code": "ZZZ",
        "fulldescription": "LANCIA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LNDR",
        "code": "ZZZ",
        "fulldescription": "LAND ROVER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LOTU",
        "code": "ZZZ",
        "fulldescription": "LOTUS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MASE",
        "code": "ZZZ",
        "fulldescription": "MASERATI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MDNA",
        "code": "ZZZ",
        "fulldescription": "MODENA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MERC",
        "code": "ZZZ",
        "fulldescription": "MERCURY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MERK",
        "code": "ZZZ",
        "fulldescription": "MERKUR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MERZ",
        "code": "ZZZ",
        "fulldescription": "MERCEDES-BENZ UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MESS",
        "code": "ZZZ",
        "fulldescription": "MESSERSCHMITT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "METE",
        "code": "ZZZ",
        "fulldescription": "METEOR UNKNOWN",
        "description": "METEOR UNKNOWN"
      },
      {
        "make": "MG",
        "code": "ZZZ",
        "fulldescription": "MG UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MITS",
        "code": "ZZZ",
        "fulldescription": "MITSUBISHI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MODE",
        "code": "ZZZ",
        "fulldescription": "MODEL A AND MODEL T MOTOR CAR REPRODUCTION CORP. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MONA",
        "code": "ZZZ",
        "fulldescription": "MONARCH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MORG",
        "code": "ZZZ",
        "fulldescription": "MORGAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MORR",
        "code": "ZZZ",
        "fulldescription": "MORRIS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MUNT",
        "code": "ZZZ",
        "fulldescription": "MUNTZ UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "NASH",
        "code": "ZZZ",
        "fulldescription": "NASH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "NISS",
        "code": "ZZZ",
        "fulldescription": "NISSAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "NSU",
        "code": "ZZZ",
        "fulldescription": "NSU UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OLDS",
        "code": "ZZZ",
        "fulldescription": "OLDSMOBILE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "OPEL",
        "code": "ZZZ",
        "fulldescription": "OPEL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PACK",
        "code": "ZZZ",
        "fulldescription": "PACKARD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PANE",
        "code": "ZZZ",
        "fulldescription": "PANTHER WESTWINDS, LTD. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PASS",
        "code": "ZZZ",
        "fulldescription": "PASSPORT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PEUG",
        "code": "ZZZ",
        "fulldescription": "PEUGEOT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PINI",
        "code": "ZZZ",
        "fulldescription": "PINIFARINA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PLYM",
        "code": "ZZZ",
        "fulldescription": "PLYMOUTH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PONT",
        "code": "ZZZ",
        "fulldescription": "PONTIAC UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PORS",
        "code": "ZZZ",
        "fulldescription": "PORSCHE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "RAMB",
        "code": "ZZZ",
        "fulldescription": "RAMBLER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "RECO",
        "code": "ZZZ",
        "fulldescription": "RECONSTRUCTED MOTORCYCLE UNKNOWN",
        "description": "MOTORCYCLE UNKNOWN"
      },
      {
        "make": "RENA",
        "code": "ZZZ",
        "fulldescription": "RENAULT UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ROL",
        "code": "ZZZ",
        "fulldescription": "ROLLS-ROYCE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ROOT",
        "code": "ZZZ",
        "fulldescription": "ROOTES UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ROV",
        "code": "ZZZ",
        "fulldescription": "ROVER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SAA",
        "code": "ZZZ",
        "fulldescription": "SAAB UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SHEB",
        "code": "ZZZ",
        "fulldescription": "SHELBY AMERICAN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SIM",
        "code": "ZZZ",
        "fulldescription": "SIMCA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SIN",
        "code": "ZZZ",
        "fulldescription": "SINGER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SCIO",
        "code": "TC",
        "fulldescription": "SCION TC",
        "description": "TC"
      },
      {
        "make": "STLG",
        "code": "ZZZ",
        "fulldescription": "STERLING UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "STRN",
        "code": "ZZZ",
        "fulldescription": "SATURN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "STU",
        "code": "ZZZ",
        "fulldescription": "STUDEBAKER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SUBA",
        "code": "ZZZ",
        "fulldescription": "SUBARU UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SUNB",
        "code": "ZZZ",
        "fulldescription": "SUNBEAM UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SUZI",
        "code": "ZZZ",
        "fulldescription": "SUZUKI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TOYT",
        "code": "ZZZ",
        "fulldescription": "TOYOTA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TRIU",
        "code": "ZZZ",
        "fulldescription": "TRIUMPH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TVR",
        "code": "ZZZ",
        "fulldescription": "TVR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "USEL",
        "code": "ZZZ",
        "fulldescription": "U.S. ELECTRICAR CORP. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VACR",
        "code": "ZZZ",
        "fulldescription": "VECTOR AEROMOTIVE CORPORATION UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VANG",
        "code": "ZZZ",
        "fulldescription": "VANGUARD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VAUX",
        "code": "ZZZ",
        "fulldescription": "VAUXHALL UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VOLK",
        "code": "ZZZ",
        "fulldescription": "VOLKSWAGEN UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VOLV",
        "code": "ZZZ",
        "fulldescription": "VOLVO UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "YAMA",
        "code": "ZZZ",
        "fulldescription": "YAMAHA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ZCZY",
        "code": "ZZZ",
        "fulldescription": "ZASTAVIA (ZCZ-YUGOSLAVIA) UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "JEEP",
        "code": "CHK",
        "fulldescription": "JEEP CHEROKEE",
        "description": "CHEROKEE"
      },
      {
        "make": "JEEP",
        "code": "COM",
        "fulldescription": "JEEP COMANCHE",
        "description": "COMANCHE"
      },
      {
        "make": "JEEP",
        "code": "DAK",
        "fulldescription": "JEEP DAKAR",
        "description": "DAKAR"
      },
      {
        "make": "JEEP",
        "code": "GCH",
        "fulldescription": "JEEP GRAND CHEROKEE",
        "description": "GRAND CHEROKEE"
      },
      {
        "make": "JEEP",
        "code": "J10",
        "fulldescription": "JEEP J10",
        "description": "J10"
      },
      {
        "make": "JEEP",
        "code": "WAG",
        "fulldescription": "JEEP WAGONEER",
        "description": "WAGONEER"
      },
      {
        "make": "JEEP",
        "code": "WRG",
        "fulldescription": "JEEP WRANGLER",
        "description": "WRANGLER"
      },
      {
        "make": "PENN",
        "code": "TL",
        "fulldescription": "J.C. PENNEY TRAILER",
        "description": "TRAILER"
      },
      {
        "make": "FLEE",
        "code": "TL",
        "fulldescription": "FLEETCRAFT CORP., TRAILER",
        "description": "TRAILER"
      },
      {
        "make": "VOLV",
        "code": "TK",
        "fulldescription": "VOLVO TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "CHEV",
        "code": "GEO",
        "fulldescription": "CHEVROLET GEO",
        "description": "GEO"
      },
      {
        "make": "LINC",
        "code": "NAV",
        "fulldescription": "LINCOLN NAVIGATOR",
        "description": "NAVIGATOR"
      },
      {
        "make": "TOYT",
        "code": "PRV",
        "fulldescription": "TOYOTA PREVIA",
        "description": "PREVIA"
      },
      {
        "make": "PLYM",
        "code": "PRW",
        "fulldescription": "PLYMOUTH PROWLER",
        "description": "PROWLER"
      },
      {
        "make": "AUDI",
        "code": "TT",
        "fulldescription": "AUDI 2000 TT-COUPE",
        "description": "2000 TT-COUPE"
      },
      {
        "make": "AUDI",
        "code": "A2",
        "fulldescription": "AUDI A2",
        "description": "A2"
      },
      {
        "make": "BMW",
        "code": "323",
        "fulldescription": "BMW 323I",
        "description": "323I"
      },
      {
        "make": "BMW",
        "code": "X5",
        "fulldescription": "BMW X5",
        "description": "X5"
      },
      {
        "make": "CHRY",
        "code": "CRU",
        "fulldescription": "CHRYSLER PT CRUISER",
        "description": "PT CRUISER"
      },
      {
        "make": "DAEW",
        "code": "KOR",
        "fulldescription": "DAEWOO KORANDO",
        "description": "KORANDO"
      },
      {
        "make": "DLHY",
        "code": "ROD",
        "fulldescription": "DELAHAYE ROADSTER",
        "description": "ROADSTER"
      },
      {
        "make": "ENCR",
        "code": "151",
        "fulldescription": "ENCORE M151",
        "description": "M151"
      },
      {
        "make": "ENCR",
        "code": "SPT",
        "fulldescription": "ENCORE SPORT",
        "description": "SPORT"
      },
      {
        "make": "FERR",
        "code": "360",
        "fulldescription": "FERRARI 360 MODENA",
        "description": "360 MODENA"
      },
      {
        "make": "FORD",
        "code": "EXC",
        "fulldescription": "FORD EXCURSION",
        "description": "EXCURSION"
      },
      {
        "make": "HOND",
        "code": "INS",
        "fulldescription": "HONDA INSIGHT",
        "description": "INSIGHT"
      },
      {
        "make": "HYUN",
        "code": "SFE",
        "fulldescription": "HYUNDAI SANTA FE",
        "description": "SANTA FE"
      },
      {
        "make": "JAGU",
        "code": "STY",
        "fulldescription": "JAGUAR S-TYPE",
        "description": "S-TYPE"
      },
      {
        "make": "JAGU",
        "code": "XKR",
        "fulldescription": "JAGUAR XKR, XKR-S",
        "description": "XKR, XKR-S"
      },
      {
        "make": "KIA",
        "code": "CLR",
        "fulldescription": "KIA CLARUS",
        "description": "KIA CLARUS"
      },
      {
        "make": "LINC",
        "code": "LS",
        "fulldescription": "LINCOLN LS",
        "description": "LS"
      },
      {
        "make": "MERZ",
        "code": "CL5",
        "fulldescription": "MERCEDES-BENZ CL500",
        "description": "CL500"
      },
      {
        "make": "MERZ",
        "code": "ML5",
        "fulldescription": "MERCEDES-BENZ ML55",
        "description": "ML55"
      },
      {
        "make": "MERZ",
        "code": "ML3",
        "fulldescription": "MERCEDES-BENZ ML320",
        "description": "ML320"
      },
      {
        "make": "MERZ",
        "code": "S43",
        "fulldescription": "MERCEDES-BENZ S430V",
        "description": "S430V"
      },
      {
        "make": "MICC",
        "code": "MC1",
        "fulldescription": "MICRO CONCEPT CARS MC1",
        "description": "MC1"
      },
      {
        "make": "NISS",
        "code": "XTR",
        "fulldescription": "NISSAN X-TERRA",
        "description": "X-TERRA"
      },
      {
        "make": "PORS",
        "code": "BOX",
        "fulldescription": "PORSCHE BOXTER 986",
        "description": "BOXTER 986"
      },
      {
        "make": "STRN",
        "code": "LS",
        "fulldescription": "SATURN LS-SEDAN",
        "description": "LS-SEDAN"
      },
      {
        "make": "STRN",
        "code": "LW",
        "fulldescription": "SATURN LW-WAGON",
        "description": "LW-WAGON"
      },
      {
        "make": "SOLE",
        "code": "FLS",
        "fulldescription": "SOLECTRIA FLASH",
        "description": "FLASH"
      },
      {
        "make": "SOLE",
        "code": "FOR",
        "fulldescription": "SOLECTRIA FORCE",
        "description": "FORCE"
      },
      {
        "make": "SOLE",
        "code": "SUN",
        "fulldescription": "SOLECTRIA SUNRISE",
        "description": "SUNRISE"
      },
      {
        "make": "SOLE",
        "code": "CTV",
        "fulldescription": "SOLECTRIA CITI VAN",
        "description": "CITI VAN"
      },
      {
        "make": "TOYT",
        "code": "ECO",
        "fulldescription": "TOYOTA ECHO",
        "description": "ECHO"
      },
      {
        "make": "VOLV",
        "code": "S40",
        "fulldescription": "VOLVO S40",
        "description": "S40"
      },
      {
        "make": "VOLV",
        "code": "V40",
        "fulldescription": "VOLVO V40",
        "description": "V40"
      },
      {
        "make": "FRHT",
        "code": "TK",
        "fulldescription": "FREIGHTLINER CORP. TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "CADI",
        "code": "ESC",
        "fulldescription": "CADILLAC ESCALADE",
        "description": "ESCALADE"
      },
      {
        "make": "SUBA",
        "code": "FOR",
        "fulldescription": "SUBARU FORESTER",
        "description": "FORESTER"
      },
      {
        "make": "WHIT",
        "code": "TK",
        "fulldescription": "WHITE MOTOR CORP. TRUCK",
        "description": "TRUCK"
      },
      {
        "make": "FORD",
        "code": "CVC",
        "fulldescription": "FORD CROWN VICTORIA",
        "description": "CROWN VICTORIA"
      },
      {
        "make": "FORD",
        "code": "EPD",
        "fulldescription": "FORD EXPEDITION",
        "description": "EXPEDITION"
      },
      {
        "make": "AUDI",
        "code": "ALL",
        "fulldescription": "AUDI ALLROAD",
        "description": "ALLROAD"
      },
      {
        "make": "BMW",
        "code": "Z8",
        "fulldescription": "BMW Z8",
        "description": "Z8"
      },
      {
        "make": "BMW",
        "code": "330",
        "fulldescription": "BMW 330CI",
        "description": "330CI"
      },
      {
        "make": "BRSH",
        "code": "ROD",
        "fulldescription": "BRUSH ROADSTER",
        "description": "ROADSTER"
      },
      {
        "make": "CRBN",
        "code": "MRL",
        "fulldescription": "CORBIN MOTORS MERLIN",
        "description": "MERLIN"
      },
      {
        "make": "CRBN",
        "code": "SPW",
        "fulldescription": "CORBIN MOTORS SPARROW",
        "description": "SPARROW"
      },
      {
        "make": "HYUN",
        "code": "XG",
        "fulldescription": "HYUNDAI XG",
        "description": "XG"
      },
      {
        "make": "LEXS",
        "code": "G43",
        "fulldescription": "LEXUS GS430",
        "description": "GS430"
      },
      {
        "make": "LEXS",
        "code": "L43",
        "fulldescription": "LEXUS LS430",
        "description": "LS430"
      },
      {
        "make": "MERZ",
        "code": "C43",
        "fulldescription": "MERCEDES-BENZ C43",
        "description": "C43"
      },
      {
        "make": "MERZ",
        "code": "LK3",
        "fulldescription": "MERCEDES-BENZ CLK320",
        "description": "CLK320"
      },
      {
        "make": "MERZ",
        "code": "LK5",
        "fulldescription": "MERCEDES-BENZ CLK55",
        "description": "CLK55"
      },
      {
        "make": "MERZ",
        "code": "SMT",
        "fulldescription": "MERCEDES-BENZ SMART CITY VEHICLE",
        "description": "SMART CITY VEHICLE"
      },
      {
        "make": "SHEB",
        "code": "ROD",
        "fulldescription": "SHELBY ROADSTER",
        "description": "SHELBY ROADSTER"
      },
      {
        "make": "SUBA",
        "code": "360",
        "fulldescription": "SUBARU 360",
        "description": "360"
      },
      {
        "make": "TOYT",
        "code": "HGH",
        "fulldescription": "TOYOTA HIGHLANDER",
        "description": "HIGHLANDER"
      },
      {
        "make": "TOYT",
        "code": "SQA",
        "fulldescription": "TOYOTA SEQUOIA",
        "description": "SEQUOIA"
      },
      {
        "make": "VOLV",
        "code": "S60",
        "fulldescription": "VOLVO S60",
        "description": "S60"
      },
      {
        "make": "BRSH",
        "code": "ZZZ",
        "fulldescription": "BRUSH UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "CRBN",
        "code": "ZZZ",
        "fulldescription": "CORBIN MOTORS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DLHY",
        "code": "ZZZ",
        "fulldescription": "DELAHAYE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ENCR",
        "code": "ZZZ",
        "fulldescription": "ENCORE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FLEE",
        "code": "ZZZ",
        "fulldescription": "FLEETCRAFT CORP. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FRHT",
        "code": "ZZZ",
        "fulldescription": "FREIGHTLINER CORP. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MICC",
        "code": "ZZZ",
        "fulldescription": "MICRO CONCEPT CARS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PENN",
        "code": "ZZZ",
        "fulldescription": "J.C. PENNEY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SOLE",
        "code": "ZZZ",
        "fulldescription": "SOLECTRIA UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WHIT",
        "code": "ZZZ",
        "fulldescription": "WHITE MOTOR CORP. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ACUR",
        "code": "MDX",
        "fulldescription": "ACURA MDX",
        "description": "MDX"
      },
      {
        "make": "FORD",
        "code": "BRW",
        "fulldescription": "FORD BREWSTER",
        "description": "BREWSTER"
      },
      {
        "make": "FORD",
        "code": "F65",
        "fulldescription": "FORD F650 SUPER CREW",
        "description": "F650 SUPER CREW"
      },
      {
        "make": "LNDR",
        "code": "RRV",
        "fulldescription": "LAND ROVER RANGE ROVER",
        "description": "RANGE ROVER"
      },
      {
        "make": "CHEV",
        "code": "TBZ",
        "fulldescription": "CHEVROLET TRAIL BLAZER",
        "description": "TRAIL BLAZER"
      },
      {
        "make": "TRLR",
        "code": "TR",
        "fulldescription": "TRLR TRAILER",
        "description": "TRAILER"
      },
      {
        "make": "KIA",
        "code": "RIO",
        "fulldescription": "KIA MOTOR CORPORATION RIO",
        "description": "RIO"
      },
      {
        "make": "MAZD",
        "code": "B26",
        "fulldescription": "MAZDA B2600",
        "description": "B2600"
      },
      {
        "make": "WINN",
        "code": "TK",
        "fulldescription": "WINNEBAGO MOTORIZED HOME",
        "description": "MOTORIZED HOME (TRUCK)"
      },
      {
        "make": "TOYT",
        "code": "LCR",
        "fulldescription": "TOYOTA LAND CRUISER",
        "description": "LAND CRUISER"
      },
      {
        "make": "PONT",
        "code": "MTA",
        "fulldescription": "PONTIAC MONTANA",
        "description": "MONTANA"
      },
      {
        "make": "PONT",
        "code": "AZT",
        "fulldescription": "PONTIAC AZTEK",
        "description": "AZTEK"
      },
      {
        "make": "MERZ",
        "code": "SL3",
        "fulldescription": "MERCEDES-BENZ SLK320",
        "description": "SLK320"
      },
      {
        "make": "TOYT",
        "code": "TUN",
        "fulldescription": "TOYOTA TUNDRA",
        "description": "TUNDRA"
      },
      {
        "make": "HUMM",
        "code": "HU2",
        "fulldescription": "HUMMER HUMMER II",
        "description": "HUMMER II"
      },
      {
        "make": "HOME",
        "code": "TL",
        "fulldescription": "HOMETTE CORP/ALY ALLIANCE TRAILER",
        "description": "TRAILER"
      },
      {
        "make": "JEEP",
        "code": "LBY",
        "fulldescription": "JEEP LIBERTY",
        "description": "LIBERTY"
      },
      {
        "make": "ACUR",
        "code": "RSX",
        "fulldescription": "ACURA RSX",
        "description": "RSX"
      },
      {
        "make": "ACUR",
        "code": "EL",
        "fulldescription": "ACURA EL",
        "description": "EL(IMPORT FROM CANADA)"
      },
      {
        "make": "ACUR",
        "code": "TSX",
        "fulldescription": "ACURA TSX",
        "description": "TSX"
      },
      {
        "make": "ADLR",
        "code": "ZZZ",
        "fulldescription": "ADLER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AERO",
        "code": "BLM",
        "fulldescription": "AIRCRAFT BLIMP",
        "description": "BLIMP"
      },
      {
        "make": "AERO",
        "code": "HEL",
        "fulldescription": "AIRCRAFT HELICOPTERS",
        "description": "HELICOPTERS - OTHER ROTOR WING"
      },
      {
        "make": "AERO",
        "code": "HOT",
        "fulldescription": "AIRCRAFT HOT AIR BALLOON",
        "description": "HOT AIR BALLOON"
      },
      {
        "make": "AERO",
        "code": "JET",
        "fulldescription": "AIRCRAFT JET PROPELLED",
        "description": "JET PROPELLED"
      },
      {
        "make": "AERO",
        "code": "PRO",
        "fulldescription": "AIRCRAFT PROPELLER DRIVEN",
        "description": "PROPELLER DRIVEN"
      },
      {
        "make": "AERO",
        "code": "SAL",
        "fulldescription": "AIRCRAFT SAILPLANE(GLIDER)",
        "description": "SAILPLANE(GLIDER)"
      },
      {
        "make": "AERO",
        "code": "ULT",
        "fulldescription": "AIRCRAFT ULTRALIGHTS",
        "description": "ULTRALIGHTS"
      },
      {
        "make": "ALCI",
        "code": "ZZZ",
        "fulldescription": "ALLEN COACHWORKS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "AMGN",
        "code": "HUM",
        "fulldescription": "AM GENERAL CORP. HUMMER",
        "description": "HUMMER"
      },
      {
        "make": "ASVE",
        "code": "REP",
        "fulldescription": "ASSEMBLED VEHICLE REPLICA",
        "description": "REPLICA"
      },
      {
        "make": "ATV",
        "code": "CYL",
        "fulldescription": "ALL-TERRAIN VEHICLE CYCLE ONLY",
        "description": "CYCLE ONLY"
      },
      {
        "make": "ATV",
        "code": "TRA",
        "fulldescription": "ALL-TERRAIN VEHICLE TRACKS ONLY",
        "description": "TRACKS ONLY"
      },
      {
        "make": "ATV",
        "code": "TRW",
        "fulldescription": "ALL-TERRAIN VEHICLE TRACKS AND WHEELS",
        "description": "TRACKS AND WHEELS"
      },
      {
        "make": "ATV",
        "code": "WHE",
        "fulldescription": "ALL-TERRAIN VEHICLE WHEELS ONLY",
        "description": "WHEELS ONLY"
      },
      {
        "make": "AUDI",
        "code": "AS8",
        "fulldescription": "AUDI S8",
        "description": "S8"
      },
      {
        "make": "BEJE",
        "code": "GST",
        "fulldescription": "BEIJING JEEP GANG STAR",
        "description": "GANG STAR"
      },
      {
        "make": "BEJE",
        "code": "ZZZ",
        "fulldescription": "BEIJING JEEP UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BMW",
        "code": "2",
        "fulldescription": "BMW 2002 SERIES",
        "description": "2002 SERIES"
      },
      {
        "make": "BMW",
        "code": "760",
        "fulldescription": "BWM 760LI",
        "description": "760LI"
      },
      {
        "make": "BMW",
        "code": "85C",
        "fulldescription": "BMW 850CI",
        "description": "850CI"
      },
      {
        "make": "BUIC",
        "code": "RDV",
        "fulldescription": "BUICK RENDEZVOUS",
        "description": "RENDEZVOUS"
      },
      {
        "make": "BUIC",
        "code": "PRK",
        "fulldescription": "BUICK PARK AVENUE",
        "description": "PARK AVENUE"
      },
      {
        "make": "BUIC",
        "code": "RNR",
        "fulldescription": "BUICK RANIER",
        "description": "RANIER"
      },
      {
        "make": "CADI",
        "code": "CTS",
        "fulldescription": "CADILLAC CTS",
        "description": "CTS"
      },
      {
        "make": "CADI",
        "code": "CON",
        "fulldescription": "CADILLAC CONCOURS",
        "description": "CONCOURS"
      },
      {
        "make": "CHEV",
        "code": "AVA",
        "fulldescription": "CHEVROLET AVALANCHE",
        "description": "AVALANCHE"
      },
      {
        "make": "CHEV",
        "code": "CNF",
        "fulldescription": "CHEVROLET CONFEDERATE",
        "description": "CONFEDERATE(ANTIQUE VEHICLE)"
      },
      {
        "make": "CHEV",
        "code": "AVO",
        "fulldescription": "CHEVROLET AVEO",
        "description": "AVEO"
      },
      {
        "make": "CHEV",
        "code": "CON",
        "fulldescription": "CHEVROLET CONCOURS",
        "description": "CONCOURS(CHEVELLE ONLY)"
      },
      {
        "make": "CHEV",
        "code": "FLM",
        "fulldescription": "CHEVROLET FLEETMASTER",
        "description": "FLEETMASTER"
      },
      {
        "make": "CHEV",
        "code": "GRE",
        "fulldescription": "CHEVROLET GREENBRIAR",
        "description": "GREENBRIAR"
      },
      {
        "make": "CHEV",
        "code": "NOM",
        "fulldescription": "CHEVROLET NOMAD",
        "description": "NOMAD"
      },
      {
        "make": "CHEV",
        "code": "SSR",
        "fulldescription": "CHEVROLET SSR",
        "description": "SSR"
      },
      {
        "make": "CHEV",
        "code": "STO",
        "fulldescription": "CHEVROLET STORM",
        "description": "STORM"
      },
      {
        "make": "CHRY",
        "code": "CSF",
        "fulldescription": "CHRYSLER CROSSFIRE",
        "description": "CROSSFIRE"
      },
      {
        "make": "CHRY",
        "code": "GVY",
        "fulldescription": "CHRYSLER GRAND VOYAGER",
        "description": "GRAND VOYAGER"
      },
      {
        "make": "CHRY",
        "code": "CVN",
        "fulldescription": "CHRYSLER CARAVAN",
        "description": "CARAVAN"
      },
      {
        "make": "CHRY",
        "code": "DYN",
        "fulldescription": "CHRYSLER DYNASTY",
        "description": "DYNASTY"
      },
      {
        "make": "CHRY",
        "code": "PCF",
        "fulldescription": "CHRYSLER PACIFICA",
        "description": "PACIFICA (SPORT WAGON)"
      },
      {
        "make": "CHRY",
        "code": "VOY",
        "fulldescription": "CHRYSLER VOYAGER",
        "description": "VOYAGER"
      },
      {
        "make": "CREL",
        "code": "ZZZ",
        "fulldescription": "CORBIN ELECTRIC UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "DORT",
        "code": "ZZZ",
        "fulldescription": "DORT MOTOR CAR COMPANY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "ENGN",
        "code": "ZZZ",
        "fulldescription": "ENGINE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "FERR",
        "code": "575",
        "fulldescription": "FERRARI 575MM",
        "description": "575MM"
      },
      {
        "make": "FIAT",
        "code": "ULY",
        "fulldescription": "FIAT ULYSSE",
        "description": "ULYSSE"
      },
      {
        "make": "FORD",
        "code": "E45",
        "fulldescription": "FORD ECONOLINE E450",
        "description": "ECONOLINE E450"
      },
      {
        "make": "FORD",
        "code": "E55",
        "fulldescription": "FORD ECONOLINE E550",
        "description": "ECONOLINE E550"
      },
      {
        "make": "FORD",
        "code": "FRE",
        "fulldescription": "FORD FREESTAR",
        "description": "FREESTAR"
      },
      {
        "make": "FORD",
        "code": "XST",
        "fulldescription": "FORD EXPLORER SPORT TRAC",
        "description": "EXPLORER SPORT TRAC"
      },
      {
        "make": "FORD",
        "code": "ZX2",
        "fulldescription": "FORD ZX2",
        "description": "ZX2"
      },
      {
        "make": "FORD",
        "code": "NBR",
        "fulldescription": "FORD THINK NEIGHBOR",
        "description": "THINK NEIGHBOR(ELEC. VEH. MODEL YEAR 2002)"
      },
      {
        "make": "FORD",
        "code": "CTY",
        "fulldescription": "FORD THINK CITY",
        "description": "THINK CITY(ELEC. VEH. MODEL YEAR 2002)"
      },
      {
        "make": "GMC",
        "code": "CYN",
        "fulldescription": "GENERAL MOTOR CORP. CANYON",
        "description": "CANYON"
      },
      {
        "make": "GMC",
        "code": "SYC",
        "fulldescription": "GENERAL MOTOR CORP. SYCLONE",
        "description": "SYCLONE"
      },
      {
        "make": "GLBL",
        "code": "ZZZ",
        "fulldescription": "GLOBAL ELECTRIC MOTOR CARS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GZL",
        "code": "RAG",
        "fulldescription": "GAZELLE RAGE(SPORT UTILITY)",
        "description": "RAGE(SPORT UTILITY)"
      },
      {
        "make": "GZL",
        "code": "ZZZ",
        "fulldescription": "GAZELLE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HOND",
        "code": "PLT",
        "fulldescription": "HONDA PILOT",
        "description": "PILOT"
      },
      {
        "make": "HOND",
        "code": "ELE",
        "fulldescription": "HONDA ELEMENT",
        "description": "ELEMENT"
      },
      {
        "make": "HOND",
        "code": "S20",
        "fulldescription": "HONDA S2000",
        "description": "S2000"
      },
      {
        "make": "HUMM",
        "code": "ZZZ",
        "fulldescription": "HUMMER UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "HUMM",
        "code": "HUM",
        "fulldescription": "HUMMER HUMMER",
        "description": "HUMMER"
      },
      {
        "make": "INFI",
        "code": "G35",
        "fulldescription": "INFINITY G35",
        "description": "G35"
      },
      {
        "make": "INFI",
        "code": "I35",
        "fulldescription": "INFINITY I35",
        "description": "I35"
      },
      {
        "make": "INFI",
        "code": "FX4",
        "fulldescription": "INFINITY FX45",
        "description": "FX45"
      },
      {
        "make": "INFI",
        "code": "FX3",
        "fulldescription": "INFINITY FX35",
        "description": "FX35"
      },
      {
        "make": "INFI",
        "code": "M45",
        "fulldescription": "INFINITY M45",
        "description": "M45"
      },
      {
        "make": "ISU",
        "code": "ASC",
        "fulldescription": "ISUZU ASCENDER",
        "description": "ASCENDER"
      },
      {
        "make": "ISU",
        "code": "VCS",
        "fulldescription": "ISUZU VEHICROSS",
        "description": "VEHICROSS"
      },
      {
        "make": "ISU",
        "code": "AXI",
        "fulldescription": "ISUZU AXIOM",
        "description": "AXIOM"
      },
      {
        "make": "JAGU",
        "code": "XTY",
        "fulldescription": "JAGUAR X-TYPE",
        "description": "X-TYPE"
      },
      {
        "make": "JAGU",
        "code": "XJ8",
        "fulldescription": "JAGUAR XJ8",
        "description": "XJ8"
      },
      {
        "make": "JAGU",
        "code": "XK8",
        "fulldescription": "JAGUAR XK8",
        "description": "XK8"
      },
      {
        "make": "JEEP",
        "code": "CJ6",
        "fulldescription": "JEEP CJ-6",
        "description": "CJ-6"
      },
      {
        "make": "JEEP",
        "code": "CJ7",
        "fulldescription": "JEEP CJ-7",
        "description": "CJ-7"
      },
      {
        "make": "JEEP",
        "code": "CJ8",
        "fulldescription": "JEEP CJ-8",
        "description": "CJ-8"
      },
      {
        "make": "JEEP",
        "code": "J20",
        "fulldescription": "JEEP J-20",
        "description": "J-20"
      },
      {
        "make": "KIA",
        "code": "AVE",
        "fulldescription": "KIA MOTOR CORP. AVELLA",
        "description": "AVELLLA"
      },
      {
        "make": "KIA",
        "code": "OPI",
        "fulldescription": "KIA MOTOR CORP. OPIRUS",
        "description": "OPIRUS"
      },
      {
        "make": "KIA",
        "code": "OPT",
        "fulldescription": "KIA MOTOR CORPORATION OPTIMA",
        "description": "OPTIMA"
      },
      {
        "make": "KIA",
        "code": "SED",
        "fulldescription": "KIA MOTOR CORPORATION SEDONA",
        "description": "SEDONA"
      },
      {
        "make": "KIA",
        "code": "SOR",
        "fulldescription": "KIA MOTOR CORPORATION SORRENTO",
        "description": "SORRENTO"
      },
      {
        "make": "KIA",
        "code": "SPC",
        "fulldescription": "KIA MOTOR CORPORATION SPECTRA",
        "description": "SPECTRA"
      },
      {
        "make": "KIA",
        "code": "AMT",
        "fulldescription": "KIA MOTOR CORPORATION AMANTI",
        "description": "AMANTI"
      },
      {
        "make": "KISS",
        "code": "ZZZ",
        "fulldescription": "KISSEL MOTOR CAR COMPANY OR KISSEL INDUSTRIES UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LFZA",
        "code": "ZZZ",
        "fulldescription": "LAFORZAUTILITY VEHICLE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "LAMO",
        "code": "MUR",
        "fulldescription": "LAMBORGHINI MURCIELAGO",
        "description": "MURCIELAGO"
      },
      {
        "make": "LAMO",
        "code": "SLH",
        "fulldescription": "LAMBORGHINI SILHOUETTE",
        "description": "SILHOUETTE"
      },
      {
        "make": "LAMO",
        "code": "129",
        "fulldescription": "LAMBORGHINI LM129",
        "description": "LM129"
      },
      {
        "make": "LAMO",
        "code": "ROD",
        "fulldescription": "LAMBORGHINI ROADSTER",
        "description": "ROADSTER"
      },
      {
        "make": "LEXS",
        "code": "350",
        "fulldescription": "LEXUS ES350",
        "description": "ES350"
      },
      {
        "make": "LEXS",
        "code": "G47",
        "fulldescription": "LEXUS GX470",
        "description": "GX470"
      },
      {
        "make": "LEXS",
        "code": "IS3",
        "fulldescription": "LEXUS IS300",
        "description": "IS300"
      },
      {
        "make": "LEXS",
        "code": "R33",
        "fulldescription": "LEXUS RX330",
        "description": "RX330"
      },
      {
        "make": "LEXS",
        "code": "S43",
        "fulldescription": "LEXUS SC430",
        "description": "SC430"
      },
      {
        "make": "LINC",
        "code": "AVA",
        "fulldescription": "LINCOLN AVIATOR",
        "description": "AVIATOR"
      },
      {
        "make": "LINC",
        "code": "BWD",
        "fulldescription": "LINCOLN BLACKWOOD",
        "description": "BLACKWOOD"
      },
      {
        "make": "LINC",
        "code": "LS6",
        "fulldescription": "LINCOLN LS6",
        "description": "LS6"
      },
      {
        "make": "LINC",
        "code": "L86",
        "fulldescription": "LINCOLN LS8",
        "description": "LS8"
      },
      {
        "make": "LNCI",
        "code": "DED",
        "fulldescription": "LANCIA DEDRA",
        "description": "DEDRA"
      },
      {
        "make": "LNDR",
        "code": "DEF",
        "fulldescription": "LAND ROVER DEFENDER 110",
        "description": "DEFENDER 110"
      },
      {
        "make": "LNDR",
        "code": "DIS",
        "fulldescription": "LAND ROVER DISCOVERY",
        "description": "DISCOVERY"
      },
      {
        "make": "LNDR",
        "code": "FRE",
        "fulldescription": "LAND ROVER FREELANDER",
        "description": "FREELANDER"
      },
      {
        "make": "MASE",
        "code": "BOR",
        "fulldescription": "MASERATI BORA",
        "description": "BORA"
      },
      {
        "make": "MAZD",
        "code": "B20",
        "fulldescription": "MAZDA B2000",
        "description": "B2000"
      },
      {
        "make": "MAZD",
        "code": "B22",
        "fulldescription": "MAZDA B2200",
        "description": "B2200"
      },
      {
        "make": "MAZD",
        "code": "B23",
        "fulldescription": "MAZDA B2300",
        "description": "B2300"
      },
      {
        "make": "MAZD",
        "code": "B25",
        "fulldescription": "MAZDA B2500",
        "description": "B2500"
      },
      {
        "make": "MAZD",
        "code": "B30",
        "fulldescription": "MAZDA B3000",
        "description": "B3000"
      },
      {
        "make": "MAZD",
        "code": "B40",
        "fulldescription": "MAZDA B4000",
        "description": "B4000"
      },
      {
        "make": "MAZD",
        "code": "MZ6",
        "fulldescription": "MAZDA 6(SIX)",
        "description": "6(SIX)"
      },
      {
        "make": "MAZD",
        "code": "RX8",
        "fulldescription": "MAZDA RX8(ROTARY ENGINE)",
        "description": "RX8(ROTARY ENGINE)"
      },
      {
        "make": "MAZD",
        "code": "TRB",
        "fulldescription": "MAZDA TRIBUTE",
        "description": "TRIBUTE"
      },
      {
        "make": "MERZ",
        "code": "E50",
        "fulldescription": "MERCEDES-BENZ E500",
        "description": "E500"
      },
      {
        "make": "MERZ",
        "code": "E55",
        "fulldescription": "MERCEDES-BENZ E55",
        "description": "E55"
      },
      {
        "make": "MERZ",
        "code": "GLW",
        "fulldescription": "MERCEDES-BENZ GELAENDEWAGEN(G-WAGEN)",
        "description": "GELAENDEWAGEN(G-WAGEN)"
      },
      {
        "make": "MERZ",
        "code": "C24",
        "fulldescription": "MERCEDES-BENZ C240",
        "description": "C240"
      },
      {
        "make": "MERZ",
        "code": "C32",
        "fulldescription": "MERCEDES-BENZ C320",
        "description": "C320"
      },
      {
        "make": "MERZ",
        "code": "CK5",
        "fulldescription": "MERCEDES-BENZ CLK500",
        "description": "CLK500"
      },
      {
        "make": "MERZ",
        "code": "M35",
        "fulldescription": "MERCEDES-BENZ ML350",
        "description": "ML350"
      },
      {
        "make": "MERZ",
        "code": "ML4",
        "fulldescription": "MERCEDES-BENZ ML430",
        "description": "ML430"
      },
      {
        "make": "MERZ",
        "code": "SL2",
        "fulldescription": "MERCEDES-BENZ SLK230",
        "description": "SLK230"
      },
      {
        "make": "MERZ",
        "code": "SL5",
        "fulldescription": "MERCEDES-BENZ SL500",
        "description": "SL500"
      },
      {
        "make": "MERZ",
        "code": "SL6",
        "fulldescription": "MERCEDES-BENZ SL600",
        "description": "SL600"
      },
      {
        "make": "MERZ",
        "code": "CL6",
        "fulldescription": "MERCEDES-BENZ CL600",
        "description": "CL600"
      },
      {
        "make": "MERZ",
        "code": "C55",
        "fulldescription": "MERCEDES-BENZ CL55 AMG",
        "description": "CL55 AMG"
      },
      {
        "make": "MERZ",
        "code": "S55",
        "fulldescription": "MERCEDES-BENZ S55 AMG",
        "description": "S55 AMG"
      },
      {
        "make": "MERZ",
        "code": "M50",
        "fulldescription": "MERCEDES-BENZ ML500",
        "description": "ML500"
      },
      {
        "make": "MERZ",
        "code": "G50",
        "fulldescription": "MERCEDEZ-BENZ G500",
        "description": "G500"
      },
      {
        "make": "MITS",
        "code": "MTX",
        "fulldescription": "MITSUBISHI MIGHTY MAX",
        "description": "MIGHTY MAX"
      },
      {
        "make": "MITS",
        "code": "OUT",
        "fulldescription": "MITSUBISHI OUTLANDER",
        "description": "OUTLANDER"
      },
      {
        "make": "MNNI",
        "code": "CPR",
        "fulldescription": "MINI COOPER/COOPER-S",
        "description": "COOPER/COOPER-S(RIGHTS BOUGHT BY BMW"
      },
      {
        "make": "MNNI",
        "code": "ZZZ",
        "fulldescription": "MINI UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MORG",
        "code": "PL8",
        "fulldescription": "MORGAN",
        "description": "PLUS 8 SERIES"
      },
      {
        "make": "NISS",
        "code": "350",
        "fulldescription": "NISSAN 350Z",
        "description": "350Z"
      },
      {
        "make": "NISS",
        "code": "ATR",
        "fulldescription": "NISSAN ALTRA-EV",
        "description": "ALTRA-EV"
      },
      {
        "make": "NISS",
        "code": "MUR",
        "fulldescription": "NISSAN MURANO",
        "description": "MURANO"
      },
      {
        "make": "NISS",
        "code": "TRO",
        "fulldescription": "NISSAN TERRANO",
        "description": "TERRANO"
      },
      {
        "make": "NISS",
        "code": "TTN",
        "fulldescription": "NISSAN TITAN",
        "description": "TITAN"
      },
      {
        "make": "OLDS",
        "code": "TRO",
        "fulldescription": "OLDSMOBILE TROFEO",
        "description": "TROFEO"
      },
      {
        "make": "OPEL",
        "code": "AST",
        "fulldescription": "OPEL ASTRA",
        "description": "ASTRA"
      },
      {
        "make": "OPEL",
        "code": "ISU",
        "fulldescription": "OPEL ISUZU",
        "description": "ISUZU"
      },
      {
        "make": "PANZ",
        "code": "ESP",
        "fulldescription": "PANOZ AUTO DEVELOPMENT CO. ESPERANTE",
        "description": "ESPERANTE"
      },
      {
        "make": "PANZ",
        "code": "ROD",
        "fulldescription": "PANOZ AUTO DEVELOPMENT CO. ROADSTER",
        "description": "ROADSTER"
      },
      {
        "make": "PANZ",
        "code": "ZZZ",
        "fulldescription": "PANOZ AUTO DEVELOPMENT CO. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PLYM",
        "code": "CRK",
        "fulldescription": "PLYMOUTH CRICKET",
        "description": "CRICKET(IMPORTED)"
      },
      {
        "make": "PLYM",
        "code": "TRL",
        "fulldescription": "PLYMOUTH TRAIL DUSTER",
        "description": "TRAIL DUSTER"
      },
      {
        "make": "PONT",
        "code": "SAF",
        "fulldescription": "PONTIAC SAFARI",
        "description": "SAFARI"
      },
      {
        "make": "PONT",
        "code": "TEM",
        "fulldescription": "PONTIAC TEMPEST",
        "description": "TEMPEST"
      },
      {
        "make": "PONT",
        "code": "VIB",
        "fulldescription": "PONTIAC VIBE",
        "description": "VIBE(SPORT WAGON)"
      },
      {
        "make": "PORS",
        "code": "CYN",
        "fulldescription": "PORSCHE CAYENNE",
        "description": "CAYENNE"
      },
      {
        "make": "ROL",
        "code": "PHT",
        "fulldescription": "ROLLS-ROYCE PHANTOM",
        "description": "PHANTOM"
      },
      {
        "make": "ROL",
        "code": "PRK",
        "fulldescription": "ROLLS-ROYCE PARK WARD",
        "description": "PARK WARD"
      },
      {
        "make": "ROV",
        "code": "25",
        "fulldescription": "ROVER ROVER 25",
        "description": "ROVER 25"
      },
      {
        "make": "ROV",
        "code": "45",
        "fulldescription": "ROVER ROVER 45",
        "description": "ROVER 45"
      },
      {
        "make": "ROV",
        "code": "75",
        "fulldescription": "ROVER ROVER 75",
        "description": "ROVER 75"
      },
      {
        "make": "SANG",
        "code": "CM6",
        "fulldescription": "SANGYONG CM600S",
        "description": "CM600S"
      },
      {
        "make": "SANG",
        "code": "JEP",
        "fulldescription": "SANGYONG JEEP",
        "description": "JEEP"
      },
      {
        "make": "SANG",
        "code": "ZZZ",
        "fulldescription": "SANGYONG UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SCIO",
        "code": "XA",
        "fulldescription": "SCION XA",
        "description": "XA"
      },
      {
        "make": "SCIO",
        "code": "XB",
        "fulldescription": "SCION XB",
        "description": "XB"
      },
      {
        "make": "SIRC",
        "code": "ZZZ",
        "fulldescription": "SUN INTERNATIONAL RACING CORPORATION UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SKOD",
        "code": "FAB",
        "fulldescription": "SKODA FABIA",
        "description": "FABIA"
      },
      {
        "make": "SKOD",
        "code": "OCT",
        "fulldescription": "SKODA OCTAVIA",
        "description": "OCTAVIA"
      },
      {
        "make": "SNOW",
        "code": "SKT",
        "fulldescription": "SNOWMOBILES SKIS AND TRACKS",
        "description": "SKIS AND TRACKS"
      },
      {
        "make": "SNOW",
        "code": "SKW",
        "fulldescription": "SNOWMOBILES SKIS AND WHEELS",
        "description": "SKIS AND WHEELS"
      },
      {
        "make": "SNOW",
        "code": "TRA",
        "fulldescription": "SNOWMOBILES TRACKS ONLY",
        "description": "TRACKS ONLY"
      },
      {
        "make": "SNOW",
        "code": "TRW",
        "fulldescription": "SNOWMOBILES TRACKS AND WHEELS",
        "description": "TRACKS AND WHEELS"
      },
      {
        "make": "SNOW",
        "code": "WHE",
        "fulldescription": "SNOWMOBILES WHEELS ONLY",
        "description": "WHEELS ONLY"
      },
      {
        "make": "SNOW",
        "code": "ZZZ",
        "fulldescription": "SNOWMOBILES UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "SPEC",
        "code": "DUN",
        "fulldescription": "SPECIALIZED VEHICLE DUNE BUGGIES",
        "description": "DUNE BUGGIES"
      },
      {
        "make": "SPEC",
        "code": "GOF",
        "fulldescription": "SPECIALIZED VEHICLE GOLF CARTS",
        "description": "GOLF CARTS"
      },
      {
        "make": "SPEC",
        "code": "GRT",
        "fulldescription": "SPECIALIZED VEHICLE GO-CARTS",
        "description": "GO-CARTS"
      },
      {
        "make": "SPEC",
        "code": "TOY",
        "fulldescription": "SPECIALIZED VEHICLE MOTORIZED RIDE-ON TOYS",
        "description": "MOTORIZED RIDE-ON TOYS"
      },
      {
        "make": "SPEC",
        "code": "WHE",
        "fulldescription": "SPECIALIZED VEHICLE MOTORIZED WHEELCHAIRS",
        "description": "MOTORIZED WHEELCHAIRS"
      },
      {
        "make": "SPEC",
        "code": "ZZZ",
        "fulldescription": "SPECIALIZED VEHICLE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "STRN",
        "code": "VUE",
        "fulldescription": "SATURN VUE",
        "description": "VUE"
      },
      {
        "make": "STRN",
        "code": "ION",
        "fulldescription": "SATURN ION",
        "description": "ION"
      },
      {
        "make": "SUBA",
        "code": "SPT",
        "fulldescription": "SUBARU OUTBACK SPORT",
        "description": "OUTBACK SPORT"
      },
      {
        "make": "SUBA",
        "code": "BJA",
        "fulldescription": "SUBARU BAJA",
        "description": "BAJA"
      },
      {
        "make": "SUBA",
        "code": "BRT",
        "fulldescription": "SUBARU BRAT",
        "description": "BRAT"
      },
      {
        "make": "SUZI",
        "code": "XL7",
        "fulldescription": "SUZUKI XL-7",
        "description": "XL-7 OR XL-7 GRAND VITARA"
      },
      {
        "make": "SUZI",
        "code": "ARO",
        "fulldescription": "SUZUKI AERIO",
        "description": "AERIO"
      },
      {
        "make": "TOYT",
        "code": "AVE",
        "fulldescription": "TOYOTA AVENSIS",
        "description": "AVENSIS"
      },
      {
        "make": "TOYT",
        "code": "HLX",
        "fulldescription": "TOYOTA HI-LUX",
        "description": "HI-LUX"
      },
      {
        "make": "TOYT",
        "code": "PRE",
        "fulldescription": "TOYOTA PRE RUNNER",
        "description": "PRE RUNNER"
      },
      {
        "make": "TOYT",
        "code": "PRI",
        "fulldescription": "TOYOTA PRIUS",
        "description": "PRIUS"
      },
      {
        "make": "TOYT",
        "code": "T15",
        "fulldescription": "TOYOTA T-150",
        "description": "T-150"
      },
      {
        "make": "TOYT",
        "code": "MTX",
        "fulldescription": "TOYOTA MATRIX",
        "description": "MATRIX"
      },
      {
        "make": "USA",
        "code": "ZZZ",
        "fulldescription": "U.S. ARMY VEHICLE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "USAF",
        "code": "ZZZ",
        "fulldescription": "U.S. AIRFORCE VEHICLE UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "USCG",
        "code": "ZZZ",
        "fulldescription": "U.S. COAST GUARD UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "USMC",
        "code": "ZZZ",
        "fulldescription": "U.S. MARINE CORPS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "USN",
        "code": "ZZZ",
        "fulldescription": "U.S. NAVY UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VEAM",
        "code": "ZZZ",
        "fulldescription": "VEHICULOS AUTOMORES MEXICANO S.A. DE C.V. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "VOLK",
        "code": "PHA",
        "fulldescription": "VOLKSWAGEN PHAETON",
        "description": "PHAETON"
      },
      {
        "make": "VOLK",
        "code": "KOM",
        "fulldescription": "VOLKSWAGEN KOMBI",
        "description": "KOMBI"
      },
      {
        "make": "VOLK",
        "code": "MCB",
        "fulldescription": "VOLKSWAGEN MICROBUS",
        "description": "MICROBUS"
      },
      {
        "make": "VOLK",
        "code": "TRG",
        "fulldescription": "VOLKSWAGEN TOUAREG",
        "description": "TOUAREG"
      },
      {
        "make": "VOLK",
        "code": "TRN",
        "fulldescription": "VOLKSWAGEN TOURAN",
        "description": "TOURAN"
      },
      {
        "make": "VOLK",
        "code": "TSP",
        "fulldescription": "VOLKSWAGEN TRANSPORTER",
        "description": "TRANSPORTER"
      },
      {
        "make": "VOLV",
        "code": "XC7",
        "fulldescription": "VOLVO XC70",
        "description": "XC70"
      },
      {
        "make": "VOLV",
        "code": "XC9",
        "fulldescription": "VOLVO XC90",
        "description": "XC90"
      },
      {
        "make": "CAT",
        "code": "ZZZ",
        "fulldescription": "CATERPILLAR TRACTOR CO. UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "GFST",
        "code": "ZZZ",
        "fulldescription": "GULF STREAM UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "KW",
        "code": "ZZZ",
        "fulldescription": "KENWORTH MOTOR TRUCK CO. DIV. OF PACCAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "MACK",
        "code": "ZZZ",
        "fulldescription": "MACK TRUCKS UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "NAVI",
        "code": "ZZZ",
        "fulldescription": "NAVISTAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "PTRB",
        "code": "ZZZ",
        "fulldescription": "PETERBILT MOTORS CO. DIV. OF PACCAR UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WHGM",
        "code": "ZZZ",
        "fulldescription": "WHITE GMC UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "WINN",
        "code": "ZZZ",
        "fulldescription": "WINNEBAGO INDUSTRIES UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "TRMN",
        "code": "ZZZ",
        "fulldescription": "TRANSMISSION UNKNOWN",
        "description": "UNKNOWN"
      },
      {
        "make": "BMW",
        "code": "ROD",
        "fulldescription": "BMW ROADSTER",
        "description": "ROADSTER"
      },
      {
        "make": "FORD",
        "code": "ECP",
        "fulldescription": "FORD ESCAPE",
        "description": "ESCAPE"
      },
      {
        "make": "MAZD",
        "code": "PTG",
        "fulldescription": "MAZDA PROTEGE",
        "description": "PROTEGE"
      },
      {
        "make": "CADI",
        "code": "SLS",
        "fulldescription": "CADILLAC SLS",
        "description": "SLS"
      },
      {
        "make": "CADI",
        "code": "STS",
        "fulldescription": "CADILLAC STS",
        "description": "STS"
      },
      {
        "make": "CHUC",
        "code": "SPY",
        "fulldescription": "CHUCK BECK MOTORSPORTS SPYDER",
        "description": "SPYDER"
      },
      {
        "make": "FERR",
        "code": "612",
        "fulldescription": "FERRARI 612 SCAGLIETTI",
        "description": "612 SCAGLIETTI"
      },
      {
        "make": "FORD",
        "code": "500",
        "fulldescription": "FORD FIVE HUNDRED(500)",
        "description": "FIVE HUNDRED(500)"
      },
      {
        "make": "FORD",
        "code": "FSY",
        "fulldescription": "FORD FREESTYLE",
        "description": "FREESTYLE"
      },
      {
        "make": "HOND",
        "code": "RGL",
        "fulldescription": "HONDA RIDGELINE",
        "description": "RIDGELINE"
      },
      {
        "make": "HUMM",
        "code": "HU3",
        "fulldescription": "HUMMER HU3",
        "description": "HU3"
      },
      {
        "make": "HYUN",
        "code": "TCN",
        "fulldescription": "HYUNDAI TUSCON",
        "description": "TUSCON"
      },
      {
        "make": "LNDR",
        "code": "LR3",
        "fulldescription": "LANDROVER LR3",
        "description": "LR3"
      },
      {
        "make": "LEXS",
        "code": "RX4",
        "fulldescription": "LEXUS RX400",
        "description": "RX400 OR RX400H(HYBRID)"
      },
      {
        "make": "LINC",
        "code": "MKL",
        "fulldescription": "LINCOLN MARK LT",
        "description": "MARK LT"
      },
      {
        "make": "LOTU",
        "code": "ELS",
        "fulldescription": "LOTUS ELISE",
        "description": "ELISE"
      },
      {
        "make": "MERZ",
        "code": "C65",
        "fulldescription": "MERCEDES-BENZ CL65",
        "description": "CL65"
      },
      {
        "make": "MERZ",
        "code": "S65",
        "fulldescription": "MERCEDES-BENZ SL65",
        "description": "SL65"
      },
      {
        "make": "MERC",
        "code": "MNR",
        "fulldescription": "MERCURY MARINER",
        "description": "MARINER"
      },
      {
        "make": "NISS",
        "code": "MIC",
        "fulldescription": "NISSAN MICRA",
        "description": "MICRA"
      },
      {
        "make": "PONT",
        "code": "WAV",
        "fulldescription": "PONTIAC WAVE",
        "description": "WAVE"
      },
      {
        "make": "STRN",
        "code": "200",
        "fulldescription": "SATURN L200",
        "description": "L200"
      },
      {
        "make": "STRN",
        "code": "300",
        "fulldescription": "SATURN L300",
        "description": "L300"
      },
      {
        "make": "SUZI",
        "code": "RNO",
        "fulldescription": "SUZUKI RENO",
        "description": "RENO"
      },
      {
        "make": "CHEV",
        "code": "CBT",
        "fulldescription": "CHEVROLET COBALT",
        "description": "COBALT"
      },
      {
        "make": "CHEV",
        "code": "CLD",
        "fulldescription": "CHEVEROLET COLORADO",
        "description": "COLORADO"
      },
      {
        "make": "PONT",
        "code": "G6",
        "fulldescription": "PONTIAC G6",
        "description": "G6"
      },
      {
        "make": "CHEV",
        "code": "EQU",
        "fulldescription": "CHEVROLET EQUINOX",
        "description": "EQUINOX"
      },
      {
        "make": "BUIC",
        "code": "LAX",
        "fulldescription": "BUICK LACROSSE",
        "description": "LACROSSE"
      },
      {
        "make": "ACUR",
        "code": "RDX",
        "fulldescription": "ACURA RDX",
        "description": "RDX"
      },
      {
        "make": "ACUR",
        "code": "CSX",
        "fulldescription": "ACURA CSX",
        "description": "CSX"
      },
      {
        "make": "ASTO",
        "code": "DB9",
        "fulldescription": "ASTON MARTIN DB9",
        "description": "DB9"
      },
      {
        "make": "ASTO",
        "code": "VNQ",
        "fulldescription": "ASTON MARTIN VANQUISH",
        "description": "VANQUISH"
      },
      {
        "make": "AUDI",
        "code": "A3",
        "fulldescription": "AUDI A3(SPORTBACK)",
        "description": "A3(SPORTBACK)"
      },
      {
        "make": "AUDI",
        "code": "RS4",
        "fulldescription": "AUDI RS4",
        "description": "RS4"
      },
      {
        "make": "BMW",
        "code": "550",
        "fulldescription": "BMW 550I",
        "description": "550I"
      },
      {
        "make": "BUIC",
        "code": "LUC",
        "fulldescription": "BUICK LUCERNE",
        "description": "LUCERNE"
      },
      {
        "make": "BUIC",
        "code": "ENC",
        "fulldescription": "BUICK ENCLAVE",
        "description": "ENCLAVE"
      },
      {
        "make": "CADI",
        "code": "DTS",
        "fulldescription": "CADILLAC DTS",
        "description": "DTS"
      },
      {
        "make": "CHEV",
        "code": "HHR",
        "fulldescription": "CHEVROLET HHR",
        "description": "HHR"
      },
      {
        "make": "CHRY",
        "code": "ASP",
        "fulldescription": "CHRYSLER ASPEN",
        "description": "ASPEN"
      },
      {
        "make": "CHRY",
        "code": "CBO",
        "fulldescription": "CHRYSLER PT CABRIO",
        "description": "PT CABRIO"
      },
      {
        "make": "CLND",
        "code": "244",
        "fulldescription": "CROSS LANDER 244X ",
        "description": "244X"
      },
      {
        "make": "DODG",
        "code": "CAL",
        "fulldescription": "DODGE CALIBER",
        "description": "CALIBER"
      },
      {
        "make": "DODG",
        "code": "NIT",
        "fulldescription": "DODGE NITRO",
        "description": "NITRO"
      },
      {
        "make": "FORD",
        "code": "FUS",
        "fulldescription": "FORD FUSION",
        "description": "FUSION"
      },
      {
        "make": "HOND",
        "code": "FIT",
        "fulldescription": "HONDA FIT",
        "description": "FIT"
      },
      {
        "make": "HYUN",
        "code": "AZR",
        "fulldescription": "HYUNDAI AZERA",
        "description": "AZERA"
      },
      {
        "make": "HYUN",
        "code": "ENT",
        "fulldescription": "HYUNDAI ENTOURAGE",
        "description": "ENTOURAGE"
      },
      {
        "make": "INFI",
        "code": "M35",
        "fulldescription": "INFINITI M35",
        "description": "M35"
      },
      {
        "make": "INTL",
        "code": "SCT",
        "fulldescription": "INTERNATION HARVESTER SCOUT",
        "description": "SCOUT"
      },
      {
        "make": "INTL",
        "code": "TVL",
        "fulldescription": "INTERNATION HARVESTER TRAVELALL",
        "description": "TRAVELALL"
      },
      {
        "make": "ISU",
        "code": "280",
        "fulldescription": "ISUZU I280",
        "description": "I280"
      },
      {
        "make": "ISU",
        "code": "350",
        "fulldescription": "ISUZU I350",
        "description": "I350"
      },
      {
        "make": "JEEP",
        "code": "CMD",
        "fulldescription": "JEEP COMMANDER",
        "description": "COMMANDER"
      },
      {
        "make": "JEEP",
        "code": "CMP",
        "fulldescription": "JEEP COMPASS",
        "description": "COMPASS"
      },
      {
        "make": "JEEP",
        "code": "PAT",
        "fulldescription": "JEEP PATRIOT",
        "description": "PATRIOT"
      },
      {
        "make": "LEXS",
        "code": "G45",
        "fulldescription": "LEXUS GS450H",
        "description": "GS450H"
      },
      {
        "make": "LEXS",
        "code": "R35",
        "fulldescription": "LEXUS RX350",
        "description": "RX350"
      },
      {
        "make": "MASE",
        "code": "GSP",
        "fulldescription": "MASERATI GRAN SPORT",
        "description": "GRAN SPORT"
      },
      {
        "make": "MAZD",
        "code": "MZ5",
        "fulldescription": "MAZDA MAZDA 5",
        "description": "MAZDA 5"
      },
      {
        "make": "MAZD",
        "code": "CX7",
        "fulldescription": "MAZDA CX7",
        "description": "CX7"
      },
      {
        "make": "MERC",
        "code": "GMQ",
        "fulldescription": "MERCURY GRAND MARQUIS",
        "description": "GRAND MARQUIS"
      },
      {
        "make": "MERC",
        "code": "MLN",
        "fulldescription": "MERCURY MILAN",
        "description": "MILAN"
      },
      {
        "make": "MERZ",
        "code": "C35",
        "fulldescription": "MERCEDES BENZ C350",
        "description": "C350"
      },
      {
        "make": "MERZ",
        "code": "CL3",
        "fulldescription": "MERCEDES BENZ CLK350",
        "description": "CLK350"
      },
      {
        "make": "MERZ",
        "code": "R35",
        "fulldescription": "MERCEDES BENZ R350(SPORT WAGON)",
        "description": "R350(SPORT WAGON)"
      },
      {
        "make": "MITS",
        "code": "RAD",
        "fulldescription": "MITSUBISHI RAIDER",
        "description": "RAIDER"
      },
      {
        "make": "MERZ",
        "code": "260",
        "fulldescription": "MERCEDES-BENZ 260 SERIES",
        "description": "260 SERIES"
      },
      {
        "make": "MERZ",
        "code": "280",
        "fulldescription": "MERCEDES-BENZ 280 SERIES",
        "description": "280 SERIES"
      },
      {
        "make": "MERZ",
        "code": "300",
        "fulldescription": "MERCEDES-BENZ 300 SERIES",
        "description": "300 SERIES"
      },
      {
        "make": "MERZ",
        "code": "320",
        "fulldescription": "MERCEDES-BENZ 320 SERIES",
        "description": "320 SERIES"
      },
      {
        "make": "MERZ",
        "code": "350",
        "fulldescription": "MERCEDES-BENZ 350 SERIES",
        "description": "350 SERIES"
      },
      {
        "make": "MERZ",
        "code": "380",
        "fulldescription": "MERCEDES-BENZ 380 SERIES",
        "description": "380 SERIES"
      }
    ];
    vehicles.colors = [
      {
        "index": 1,
        "code": "LBL",
        "description": "Light Blue",
        "pantone": "2905",
        "hex": "8dc8e8"
      },
      {
        "index": 2,
        "code": "TQU",
        "description": "Turquoise",
        "pantone": "313",
        "hex": "0092bc"
      },
      {
        "index": 3,
        "code": "DBL",
        "description": "Dark Blue",
        "pantone": "295",
        "hex": "002855"
      },
      {
        "index": 4,
        "code": "BLU",
        "description": "Blue",
        "pantone": "300",
        "hex": "005eb8"
      },
      {
        "index": 5,
        "code": "AME",
        "description": "Amethyst",
        "pantone": "violet C",
        "hex": "440099"

      },
      {
        "index": 6,
        "code": "PLE",
        "description": "Purple",
        "pantone": "2593",
        "hex": "84329b"
      },
      {

        "index": 7,
        "code": "LAV",
        "description": "Lavender",
        "pantone": "2635",
        "hex": "c5b4e3"
      },
      {
        "index": 8,
        "code": "MVE",
        "description": "Mauve",
        "pantone": "500",
        "hex": "C6858F"
      },
      {
        "index": 9,
        "code": "PNK",
        "description": "PINK",
        "pantone": "190",
        "hex": "f67599"
      },
      {
        "index": 10,
        "code": "RED",
        "description": "Red",
        "pantone": "187",
        "hex": "a6192e"
      },
      {
        "index": 11,
        "code": "MAR",
        "description": "Maroon",
        "pantone": "188",
        "hex": "76232f"
      },
      {
        "index": 12,
        "code": "ONG",
        "description": "Orange",
        "pantone": "157",
        "hex": "eca154"
      },
      {
        "index": 13,
        "code": "CPR",
        "description": "Copper",
        "pantone": "470",
        "hex": "A45A2A"
      },
      {
        "index": 14,
        "code": "BRZ",
        "description": "Bronze",
        "pantone": "146",
        "hex": "a76d11"
      },
      {
        "index": 15,
        "code": "TAN",
        "description": "Tan",
        "pantone": "465",
        "hex": "b9975b"
      },
      {
        "index": 16,
        "code": "GLD",
        "description": "Gold",
        "pantone": "117",
        "hex": "c99700"
      },
      {
        "index": 17,
        "code": "YEL",
        "description": "Yellow",
        "pantone": "Medium Yellow C",
        "hex": "ffd900"
      },
      {
        "index": 18,
        "code": "LTG",
        "description": "Light Green",
        "pantone": "337",
        "hex": "8fd6bd"
      },
      {
        "index": 19,
        "code": "GRN",
        "description": "Green",
        "pantone": "3415",
        "hex": "007749"
      },
      {
        "index": 20,
        "code": "DGR",
        "description": "Dark Green",
        "pantone": "3435",
        "hex": "154734"
      },
      {
        "index": 21,
        "code": "TEA",
        "description": "Teal",
        "pantone": "321",
        "hex": "008c95"
      },
      {
        "index": 22,
        "code": "BRO",
        "description": "Brown",
        "pantone": "476",
        "hex": "4E3629"
      },
      {
        "index": 23,
        "code": "CRM",
        "description": "Cream",
        "pantone": "7499",
        "hex": "F1E6B2"
      },
      {
        "index": 24,
        "code": "BGE",
        "description": "Beige",
        "pantone": "468",
        "hex": "ddcba4"
      },
      {
        "index": 25,
        "code": "TPE",
        "description": "Taupe",
        "pantone": "407",
        "hex": "b2a8a2"
      },
      {
        "index": 26,
        "code": "SIL",
        "description": "Silver",
        "pantone": "420",
        "hex": "c7c9c7"
      },
      {
        "index": 27,
        "code": "COM",
        "description": "Chrome",
        "pantone": "Cool Gray 6",
        "hex": "a7a8aa"
      },
      {
        "index": 28,
        "code": "GRY",
        "description": "Gray",
        "pantone": "Cool Gray 9",
        "hex": "75787b"
      },
      {
        "index": 29,
        "code": "BLK",
        "description": "Black",
        "pantone": "75787b",
        "hex": "2D2926"
      },
      {
        "index": 30,
        "code": "WHI",
        "description": "White",
        "pantone": null,
        "hex": null
      },
      {
        "index": 31,
        "code": "CAM",
        "description": "Camouflage",
        "pantone": null,
        "hex": null
      },
      {
        "index": 32,
        "code": "MUL",
        "description": "Multi-Color",
        "pantone": null,
        "hex": null
      }
    ];
    this.content = vehicles;
  }])
  ;

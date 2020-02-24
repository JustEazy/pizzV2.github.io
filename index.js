 var app = new Vue ({
    el: '#app',
    data: {
      fillingCounter: 0,

      fillingsAlert: false,
      fillingsAlert_filter: false,

      priceResult: 0,
      priceSausage: 70,
      priceBekon: 110,
      priceMidii: 150,
      priceShinka: 130,
      priceTelaytina: 90,
      priceRiba: 110,
      priceCheese: 50,
      priceOlivki: 60,
      priceOgurez: 55,
      priceTomato: 55,
      priceKukuruza: 60,
      priceKrevetki: 120,
      priceBrokoli: 80,
      priceAnanas: 95,
      pricePerez: 95,

      isVisible_sausage: false,
      isVisible_bekon: false,
      isVisible_midii: false,
      isVisible_shinka: false,
      isVisible_tel: false,
      isVisible_riba: false,
      isVisible_cheese: false,
      isVisible_olivki: false,
      isVisible_ogurez: false,
      isVisible_tomato: false,
      isVisible_kukuruza: false,
      isVisible_brokoli: false,
      isVisible_ananas: false,
      isVisible_krevetki: false,
      isVisible_perez: false,

      fillingCounter_sausage: 0,
      fillingCounter_shinka: 0,
      fillingCounter_bekon: 0,
      fillingCounter_midii: 0,
      fillingCounter_telaytina: 0,
      fillingCounter_riba: 0,
      fillingCounter_cheese: 0,
      fillingCounter_olivki: 0,
      fillingCounter_ogurez: 0,
      fillingCounter_tomato: 0,
      fillingCounter_kukuruza: 0,
      fillingCounter_brokoli: 0,
      fillingCounter_ananas: 0,
      fillingCounter_krevetki: 0,
      fillingCounter_perez: 0,
    },
    watch:{
        fillingCounter_sausage: function(){
            if(this.fillingCounter_sausage == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_shinka: function(){
            if(this.fillingCounter_shinka == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_bekon: function(){
            if(this.fillingCounter_bekon == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_midii: function(){
            if(this.fillingCounter_midii == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_telaytina: function(){
            if(this.fillingCounter_telaytina == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_brokoli: function(){
            if(this.fillingCounter_brokoli == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_riba: function(){
            if(this.fillingCounter_riba == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_krevetki: function(){
            if(this.fillingCounter_krevetki == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_kukuruza: function(){
            if(this.fillingCounter_kukuruza == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_olivki: function(){
            if(this.fillingCounter_olivki == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_ogurez: function(){
            if(this.fillingCounter_ogurez == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_perez: function(){
            if(this.fillingCounter_perez == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_cheese: function(){
            if(this.fillingCounter_cheese == 1){
                this.fillingCounter++
            }
        },
        fillingCounter_ananas: function(){
            if(this.fillingCounter_ananas == 1){
                this.fillingCounter++
            }
        },
        fillingCounter: function(){
            if(this.fillingCounter > 4){
                this.fillingsAlert = true
                this.fillingsAlert_filter = true
                this.fillingCounter = 0
                this.fillingCounter_sausage = 0
                this.fillingCounter_shinka = 0
                this.fillingCounter_bekon = 0
                this.fillingCounter_midii = 0
                this.fillingCounter_telaytina = 0
                this.fillingCounter_riba = 0
                this.fillingCounter_cheese = 0
                this.fillingCounter_olivki = 0
                this.fillingCounter_ogurez = 0
                this.fillingCounter_tomato = 0
                this.fillingCounter_kukuruz = 0
                this.fillingCounter_brokoli = 0
                this.fillingCounter_ananas = 0
                this.fillingCounter_krevetki = 0
                this.fillingCounter_perez = 0

                this.isVisible_sausage = false,
                this.isVisible_bekon = false,
                this.isVisible_midii = false,
                this.isVisible_shinka = false,
                this.isVisible_tel = false,
                this.isVisible_riba = false,
                this.isVisible_cheese = false,
                this.isVisible_olivki = false,
                this.isVisible_ogurez = false,
                this.isVisible_tomato = false,
                this.isVisible_kukuruza = false,
                this.isVisible_brokoli = false,
                this.isVisible_ananas = false,
                this.isVisible_krevetki = false,
                this.isVisible_perez = false,
                this.fillingCounter_sausage = 0
                this.fillingCounter_shinka = 0
                this.fillingCounter_bekon = 0
                this.fillingCounter_midii = 0
                this.fillingCounter_telaytina = 0
                this.fillingCounter_riba = 0,
                this.fillingCounter_cheese = 0
                this.fillingCounter_olivki = 0
                this.fillingCounter_ogurez = 0
                this.fillingCounter_tomato = 0
                this.fillingCounter_kukuruza = 0
                this.fillingCounter_brokoli = 0
                this.fillingCounter_ananas = 0
                this.fillingCounter_krevetki = 0
                this.fillingCounter_perez = 0
                
                this.priceResult = 0
            }
        },
    },
    methods: {
        riseFillingCounter_bekon: function(){
            if(this.fillingCounter_bekon < 3){
                this.fillingCounter_bekon++
                this.priceResult = this.priceResult + this.priceBekon
            }        
        },
        riseFillingCounter_cheese: function(){
            if(this.fillingCounter_cheese < 3){
                this.fillingCounter_cheese++
                this.priceResult = this.priceResult + this.priceCheese
            }        
        },
        riseFillingCounter_olivki: function(){
            if(this.fillingCounter_olivki < 3){
                this.fillingCounter_olivki++
                this.priceResult = this.priceResult + this.priceOlivki
            }        
        },
        riseFillingCounter_ogurez: function(){
            if(this.fillingCounter_ogurez < 3){
                this.fillingCounter_ogurez++
                this.priceResult = this.priceResult + this.priceOgurez
            }        
        },
        riseFillingCounter_brokoli: function(){
            if(this.fillingCounter_brokoli < 3){
                this.fillingCounter_brokoli++
                this.priceResult = this.priceResult + this.priceBrokoli
            }        
        },
        riseFillingCounter_tomato: function(){
            if(this.fillingCounter_tomato < 3){
                this.fillingCounter_tomato++
                this.priceResult = this.priceResult + this.priceTomato
            }        
        },
        riseFillingCounter_kukuruza: function(){
            if(this.fillingCounter_kukuruza < 3){
                this.fillingCounter_kukuruza++
                this.priceResult = this.priceResult + this.priceKukuruza
            }        
        },
        riseFillingCounter_midii: function(){
            if(this.fillingCounter_midii< 3){
                this.fillingCounter_midii++
                this.priceResult = this.priceResult + this.priceMidii
            }        
        },
        riseFillingCounter_sausage: function(){
            if(this.fillingCounter_sausage < 3){
                this.fillingCounter_sausage++
                this.priceResult = this.priceResult + this.priceSausage
            }        
        },
        riseFillingCounter_shinka: function(){
            if(this.fillingCounter_shinka < 3){
                this.fillingCounter_shinka++
                this.priceResult = this.priceResult + this.priceShinka
            }        
        },
        riseFillingCounter_ananas: function(){
            if(this.fillingCounter_ananas < 3){
                this.fillingCounter_ananas++
                this.priceResult = this.priceResult + this.priceAnanas
            }        
        },
        riseFillingCounter_telaytina: function(){
            if(this.fillingCounter_telaytina < 3){
                this.fillingCounter_telaytina++
                this.priceResult = this.priceResult + this.priceTelaytina
            }        
        },
        riseFillingCounter_krevetki: function(){
            if(this.fillingCounter_krevetki < 3){
                this.fillingCounter_krevetki++
                this.priceResult = this.priceResult + this.priceKrevetki
            }        
        },
        riseFillingCounter_perez: function(){
            if(this.fillingCounter_perez < 3){
                this.fillingCounter_perez++
                this.priceResult = this.priceResult + this.pricePerez
            }        
        },
        riseFillingCounter_riba: function(){
            if(this.fillingCounter_riba < 3){
                this.fillingCounter_riba++
                this.priceResult = this.priceResult + this.priceRiba
            }     
        },
        reduceFillingCounter_riba: function(){
            if(this.fillingCounter_riba > 0){
                this.fillingCounter_riba--
                this.priceResult = this.priceResult - this.priceRiba
            }
            if(this.fillingCounter_riba > 0){
                this.isVisible_riba = true
            }
            else{ this.isVisible_riba = false }
            if(this.fillingCounter_riba == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_cheese: function(){
            if(this.fillingCounter_cheese > 0){
                this.fillingCounter_cheese--
                this.priceResult = this.priceResult - this.priceCheese
            }
            if(this.fillingCounter_cheese > 0){
                this.isVisible_cheese = true
            }
            else{ this.isVisible_cheese = false }
            if(this.fillingCounter_cheese == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_perez: function(){
            if(this.fillingCounter_perez > 0){
                this.fillingCounter_perez--
                this.priceResult = this.priceResult - this.pricePerez
            }
            if(this.fillingCounter_perez > 0){
                this.isVisible_perez = true
            }
            else{ this.isVisible_perez = false }
            if(this.fillingCounter_perez == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_tomato: function(){
            if(this.fillingCounter_tomato > 0){
                this.fillingCounter_tomato--
                this.priceResult = this.priceResult - this.priceTomato
            }
            if(this.fillingCounter_tomato > 0){
                this.isVisible_tomato = true
            }
            else{ this.isVisible_tomato = false }
            if(this.fillingCounter_tomato == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_ananas: function(){
            if(this.fillingCounter_ananas > 0){
                this.fillingCounter_ananas--
                this.priceResult = this.priceResult - this.priceAnanas
            }
            if(this.fillingCounter_ananas > 0){
                this.isVisible_ananas = true
            }
            else{ this.isVisible_ananas = false }
            if(this.fillingCounter_ananas == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_bekon: function(){
            if(this.fillingCounter_bekon> 0){
                this.fillingCounter_bekon--
                this.priceResult = this.priceResult - this.priceBekon
            }
            if(this.fillingCounter_bekon > 0){
                this.isVisible_bekon = true
            }
            else{ this.isVisible_bekon = false }
            if(this.fillingCounter_bekon == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_sausage: function(){
            if(this.fillingCounter_sausage> 0){
                this.fillingCounter_sausage--
                this.priceResult = this.priceResult - this.priceSausage
            }
            if(this.fillingCounter_sausage > 0){
                this.isVisible_sausage = true
            }
            else{ this.isVisible_sausage = false }
            if(this.fillingCounter_sausage == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_shinka: function(){
            if(this.fillingCounter_shinka > 0){
                this.fillingCounter_shinka--
                this.priceResult = this.priceResult - this.priceShinka
            }
            if(this.fillingCounter_shinka > 0){
                this.isVisible_shinka = true
            }
            else{ this.isVisible_shinka = false }
            if(this.fillingCounter_shinka == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_brokoli: function(){
            if(this.fillingCounter_brokoli > 0){
                this.fillingCounter_brokoli--
                this.priceResult = this.priceResult - this.priceBrokoli
            }
            if(this.fillingCounter_brokoli> 0){
                this.isVisible_brokoli = true
            }
            else{ this.isVisible_brokoli = false }
            if(this.fillingCounter_brokoli == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_telaytina: function(){
            if(this.fillingCounter_telaytina> 0){
                this.fillingCounter_telaytina--
                this.priceResult = this.priceResult - this.priceTelaytina
            }
            if(this.fillingCounter_telaytina > 0){
                this.isVisible_tel = true
            }
            else{ this.isVisible_tel = false }
            if(this.fillingCounter_telaytina == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_midii: function(){
            if(this.fillingCounter_midii > 0){
                this.fillingCounter_midii--
                this.priceResult = this.priceResult - this.priceMidii
            }
            if(this.fillingCounter_midii > 0){
                this.isVisible_midii = true
            }
            else{ this.isVisible_midii = false }
            if(this.fillingCounter_midii == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_krevetki: function(){
            if(this.fillingCounter_krevetki > 0){
                this.fillingCounter_krevetki--
                this.priceResult = this.priceResult - this.priceKrevetki
            }
            if(this.fillingCounter_krevetki > 0){
                this.isVisible_krevetki = true
            }
            else{ this.isVisible_krevetki = false }
            if(this.fillingCounter_krevetki == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_ogurez: function(){
            if(this.fillingCounter_ogurez > 0){
                this.fillingCounter_ogurez--
                this.priceResult = this.priceResult - this.priceOgurez
            }
            if(this.fillingCounter_ogurez > 0){
                this.isVisible_ogurez = true
            }
            else{ this.isVisible_ogurez = false }
            if(this.fillingCounter_ogurez == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_olivki: function(){
            if(this.fillingCounter_olivki > 0){
                this.fillingCounter_olivki--
                this.priceResult = this.priceResult - this.priceOlivki
            }
            if(this.fillingCounter_olivki > 0){
                this.isVisible_olivki = true
            }
            else{ this.isVisible_olivki = false }
            if(this.fillingCounter_olivki == 1){
                this.fillingCounter--
            }
        },
        reduceFillingCounter_kukuruza: function(){
            if(this.fillingCounter_kukuruza > 0){
                this.fillingCounter_kukuruza--
                this.priceResult = this.priceResult - this.priceKukuruza
            }
            if(this.fillingCounter_kukuruza > 0){
                this.isVisible_kukuruza = true
            }
            else{ this.isVisible_kukuruza = false }
            if(this.fillingCounter_kukuruza == 1){
                this.fillingCounter--
            }
        },
                
        







    },
 })
  
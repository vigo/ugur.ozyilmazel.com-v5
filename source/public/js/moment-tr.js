var suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    
    6: '\'ncı',
    
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    
    60: '\'ıncı',
    90: '\'ıncı'
};

moment.locale('tr', {
  months : "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
  monthsShort : "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
  weekdays : "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
  weekdaysShort : "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
  weekdaysMin : "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
  longDateFormat : {
      LT : "HH:mm",
      LTS : "LT:ss",
      L : "DD.MM.YYYY",
      LL : "D MMMM YYYY",
      LLL : "D MMMM YYYY LT",
      LLLL : "dddd, D MMMM YYYY LT"
  },
  calendar : {
      sameDay: "[bugün saat] LT",
      nextDay: '[yarın saat] LT',
      nextWeek: '[haftaya] dddd [saat] LT',
      lastDay: '[dün] LT',
      lastWeek: '[geçen hafta] dddd [saat] LT',
      sameElse: 'L'
  },
  relativeTime : {
    future : '%s sonra',
    past : '%s önce',
    s : 'Birkaç saniye',
    m : '1 dakika',
    mm : '%d dakika',
    h : '1 saat',
    hh : '%d saat',
    d : '1 gün',
    dd : '%d gün',
    M : '1 ay',
    MM : '%d ay',
    y : '1 yıl',
    yy : '%d yıl'
  },
  ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
  ordinal : function (number) {
      if (number === 0) {  // special case for zero
          return number + '\'ıncı';
      }
      var a = number % 10,
          b = number % 100 - a,
          c = number >= 100 ? 100 : null;

      return number + (suffixes[a] || suffixes[b] || suffixes[c]);
  },
  week : {
      dow : 1,
      doy : 7
  }
});
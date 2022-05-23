export default {
  lang: {
    name: 'nl',
    weekdays:
      'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zon_maa_din_woe_don_vri_zat'.split('_'),
    weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
    weekStart: 1,
    months:
      'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
        '_'
      ),
    monthsShort: 'jan_feb_maa_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    formats: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm',
    },
    ordinal: (n) => `${n}º`,
    buttonCancel: 'Annuleren',
    buttonValidate: 'Ok',
    rangeHeaderText: 'Van %d Tot 13',
  },
}

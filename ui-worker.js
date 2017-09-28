addEventListener('message', function(e) {
  var data = JSON.parse(e.data);

  var languageUIArray = [],
  wordUIArray = [],
  reconstructionUIArray = [];

  function populateData() {
    data.forEach(function(language, i) {
      var langTableRow = '<tr data-target="/' + language.id + '">' +
          '<td class="text-left language_name">' + language.Language_name + '</td>' +
          '<td class="text-left subgroup">' + language.Subgroup + '</td>' +
          '<td class="text-left family">' + language.Family + '</td>' +
          '<td class="text-left iso_code">' + language.ISO_code + '</td>' +
          '<td class="text-left glottocode">' + language.Glottocode + '</td>' +
          '<td class="text-left aiatsiscode">' + language.AIATSIS_code + '</td>' +
          '<td class="text-left variety">' + language.Variety + '</td>' + '</tr>';
        languageUIArray.push(langTableRow);

        language.Words.forEach(function(word, i) {
          var wordTableRow = '<tr data-target="/' + word.id + '">' +
              '<td class="text-left id">' + word.id + '</td>' +
              '<td class="text-left word">' + word.Word + '</td>' +
              '<td class="text-left phonetic_form">' + word.Phonetic_form + '</td>' +
              '<td class="text-left og_gloss">' + word.Og_gloss + '</td>' +
              '<td class="text-left language_name">' + word.Language_name + '</td>' +
              '<td class="text-left part_of_speech">' + word.POS + '</td>' +
              '<td class="text-left source">' + word.Source + '</td>' + '</tr>';

            wordUIArray.push(wordTableRow);

            var reconstructionTableRow = '<tr data-target="/' + word.id + '">' +
                '<td class="text-left id">' + word.id + '</td>' +
                '<td class="text-left word">' + word.Word + '</td>' +
                '<td class="text-left form">' + word.Reconstruction_form + '</td>' +
                '<td class="text-left level">' + word.Reconstruction_level + '</td>' +
                '<td class="text-left gloss">' + word.Reconstruction_gloss + '</td>' +
                '<td class="text-left notes">' + word.Reconstruction_notes + '</td>' + '</tr>';
            reconstructionUIArray.push(reconstructionTableRow);
        })
        if (i == data.length - 1) postData();
    });
  } populateData();

  function postData() {
    postMessage([languageUIArray, wordUIArray, reconstructionUIArray]);
  }

});

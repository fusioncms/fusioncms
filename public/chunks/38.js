<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/pluralize/pluralize.js":
/*!*********************************************!*\
  !*** ./node_modules/pluralize/pluralize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (true) {
    // Node.
    module.exports = pluralize();
  } else {}
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Tokens are an exact match.
    if (word === token) return token;

    // Lower cased words. E.g. "hello".
    if (word === word.toLowerCase()) return token.toLowerCase();

    // Upper cased words. E.g. "WHISKY".
    if (word === word.toUpperCase()) return token.toUpperCase();

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */
  function replace (word, rule) {
    return word.replace(rule[0], function (match, index) {
      var result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */
  function sanitizeWord (token, word, rules) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = rules.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = rules[len];

      if (rule[0].test(word)) return replace(word, rule);
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Check if a word is part of the map.
   */
  function checkWord (replaceMap, keepMap, rules, bool) {
    return function (word) {
      var token = word.toLowerCase();

      if (keepMap.hasOwnProperty(token)) return true;
      if (replaceMap.hasOwnProperty(token)) return false;

      return sanitizeWord(token, token, rules) === token;
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */
  pluralize.isPlural = checkWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */
  pluralize.isSingular = checkWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['passerby', 'passersby']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/[^\u0000-\u007F]$/i, '$0'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
    [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
    [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
    [/(test)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'aircraft',
    'alcohol',
    'ammo',
    'analytics',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'firmware',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'hardware',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'mud',
    'manga',
    'news',
    'only',
    'personnel',
    'pike',
    'plankton',
    'pliers',
    'police',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'software',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transportation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    /pok[eé]mon$/i,
    // Regexes.
    /[^aeiou]ese$/i, // "chinese", "japanese"
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /measles$/i,
    /o[iu]s$/i, // "carnivorous"
    /pox$/i, // "chickpox", "smallpox"
    /sheep$/i
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});


/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{cS6j:function(s,t,e){"use strict";e.r(t);e("wd/R");var a={data:function(){return{user:null,id:Number(this.$route.params.user)||null,roles:null,errors:{},name:"",email:"",role:null,password:"",passwordConfirmation:"",status:"1"}},computed:{roleOptions:function(){var s=_.filter(this.roles,function(s){return"guest"!==s.handle});return s=_.map(s,function(s){return{label:s.name,value:s.slug}})}},methods:{hasError:function(s){return void 0!==this.errors[s]},getError:function(s){return this.hasError(s)?this.errors[s][0]:""},submit:function(){var s=this;axios.patch("/api/users/"+this.id,{name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation,role:this.role,status:this.status}).then(function(t){toast("User successfully updated","success"),s.$router.push("/users")}).catch(function(t){toast(t.response.data.message,"failed"),s.errors=t.response.data.errors})}},beforeRouteEnter:function(s,t,e){axios.all([axios.get("/api/roles"),axios.get("/api/users/"+s.params.user)]).then(axios.spread(function(s,t){e(function(e){e.roles=s.data.data,e.user=t.data.data,e.name=e.user.name,e.email=e.user.email,e.role=e.user.roles[0].slug,e.status=e.user.status?"1":"0"})}))}},r=e("KHd+"),i=Object(r.a)(a,function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"user-alt"}},[s._v("Edit User")])],1),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"content-container"},[e("form",{on:{submit:function(t){return t.preventDefault(),s.submit(t)}}},[e("p-card",[e("div",{staticClass:"row"},[e("div",{staticClass:"col xl:text-right w-full xl:w-1/3"},[e("div",{staticClass:"xl:mr-10"},[e("h3",[s._v("Personal")]),s._v(" "),e("p",{staticClass:"text-sm"},[s._v("Information to identify the user both within the CMS and by means of login.")])])]),s._v(" "),e("div",{staticClass:"col w-full xl:w-2/3"},[e("p-input",{attrs:{name:"name",label:"Name",autocomplete:"off","has-error":s.hasError("name"),"error-message":s.getError("name"),autofocus:"",required:""},model:{value:s.name,callback:function(t){s.name=t},expression:"name"}}),s._v(" "),e("p-input",{attrs:{type:"email",name:"email",label:"E-mail",autocomplete:"off","has-error":s.hasError("email"),"error-message":s.getError("email"),required:""},model:{value:s.email,callback:function(t){s.email=t},expression:"email"}})],1)]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col xl:text-right w-full xl:w-1/3"},[e("div",{staticClass:"xl:mr-10"},[e("h3",[s._v("Security")]),s._v(" "),e("p",{staticClass:"text-sm"},[s._v("Secure the account by specifying the role and setting a strong password.")])])]),s._v(" "),e("div",{staticClass:"col w-full xl:w-2/3"},[e("p-select",{attrs:{name:"role",label:"Role",options:s.roleOptions,autocomplete:"off",value:"user","has-error":s.hasError("role"),"error-message":s.getError("role"),required:""},model:{value:s.role,callback:function(t){s.role=t},expression:"role"}}),s._v(" "),e("p-input",{attrs:{type:"password",name:"password",label:"Password",autocomplete:"new-password","has-error":s.hasError("password"),"error-message":s.getError("password"),required:""},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),s._v(" "),e("p-input",{attrs:{type:"password",name:"password_confirmation",label:"Confirm Password",autocomplete:"new-password","has-error":s.hasError("password_confirmation"),"error-message":s.getError("password_confirmation"),required:""},model:{value:s.passwordConfirmation,callback:function(t){s.passwordConfirmation=t},expression:"passwordConfirmation"}})],1)])])],1)]),s._v(" "),e("div",{staticClass:"side-container"},[e("form",{on:{submit:function(t){return t.preventDefault(),s.submit(t)}}},[e("p-card",{staticClass:"mb-6"},[e("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:"1"},{label:"Disabled",value:"0"}]},model:{value:s.status,callback:function(t){s.status=t},expression:"status"}}),s._v(" "),e("portal",{attrs:{to:"actions"}},[e("router-link",{staticClass:"button mr-3",attrs:{to:{name:"users"}}},[s._v("Cancel")]),s._v(" "),e("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),s.submit(t)}}},[s._v("Save User")])],1)],1)],1),s._v(" "),e("p-card",{staticClass:"text-center mb-6"},[e("img",{attrs:{src:"/img/avatar.png",alt:"Avatar"}})]),s._v(" "),s.user?e("p-card",{staticClass:"text-sm"},[e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Status")]),s._v(" "),s.user.status?e("p",[s._v("Enabled "),e("fa-icon",{staticClass:"text-success-light",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1):e("p",[s._v("Disabled "),e("fa-icon",{staticClass:"text-danger-light",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1)]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Verified")]),s._v(" "),s.user.verified?e("p",[s._v("Yes "),e("fa-icon",{staticClass:"text-success-light",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1):e("p",[s._v("No "),e("fa-icon",{staticClass:"text-danger-light",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1)]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Registered")]),s._v(" "),e("p",[s._v(s._s(s.moment(s.user.created_at.date).format("L")))])]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Last Login")]),s._v(" "),s.user.logged_in_at?e("p",[s._v(s._s(s.moment(s.user.logged_in_at.date).format("L")))]):e("p",[s._v("Never")])]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Last Invalid Login")]),s._v(" "),s.user.invalidly_logged_in_at?e("p",[s._v(s._s(s.moment(s.user.invalidly_logged_in_at.date).format("L")))]):e("p",[s._v("Never")])]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Last Password Change")]),s._v(" "),s.user.password_changed_at?e("p",[s._v(s._s(s.moment(s.user.password_changed_at.date).format("L")))]):e("p",[s._v("Never")])]),s._v(" "),e("div",{staticClass:"flex justify-between"},[e("label",{staticClass:"form__label"},[s._v("Invalid Login Count")]),s._v(" "),e("p",[s._v(s._s(s.user.invalid_logins))])])]):s._e()],1)])],1)},[],!1,null,null,null);t.default=i.exports}}]);
>>>>>>> 41384de30fea5ec5c95a8be9fd61fbabbbeddadc

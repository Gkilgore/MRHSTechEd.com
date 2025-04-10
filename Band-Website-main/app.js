// Create a new Vue.js application
const app = Vue.createApp({
    // Define the data properties for the app
    data() {
        return {
            // A string for storing the search term entered by the user
            searchTerm: '',

            // Boolean flags to control the visibility of different filters
            filterClass: false,
            filterExtras: false
        };
    },

    // Define methods for interacting with the app
    methods: {
        // Method to handle the search functionality
        search() {
            // Normalize the search term (convert to lowercase and replace spaces with underscores)
            let searchTerm = this.searchTerm.toLowerCase().replace(/\s+/g, '_');

            // Iterate through each element with the class 'ensembles'
            $('.ensembles').each(function () {
                const divId = $(this).attr('id'); // Get the id of the current element
                // Show the element if its id contains the search term, otherwise hide it
                if (divId && divId.toLowerCase().includes(searchTerm)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });

            // If the 'filterClass' is enabled, hide all elements with class 'extracurricular'
            if (this.filterClass == true) {
                $('.extracurricular').each(function () {
                    $(this).hide();
                });
            }

            // If the 'filterExtras' is enabled, hide all elements with class 'inClass'
            if (this.filterExtras == true) {
                $('.inClass').each(function () {
                    $(this).hide();
                });
            }
        },

        // Method to check the state of the checkboxes and apply filters accordingly
        checkcbxs() {
            // If 'filterClass' is false, uncheck the corresponding checkbox
            if (this.filterClass == false) {
                $("#cbx1").prop("checked", false);
            }
            // If 'filterExtras' is false, uncheck the corresponding checkbox
            if (this.filterExtras == false) {
                $("#cbx2").prop("checked", false);
            }
            
            // If neither filter is active, show all 'ensembles' elements
            if (this.filterClass == false && this.filterExtras == false) {
                $('.ensembles').each(function () {
                    $(this).show();
                });
            }

            // If the search term is empty, adjust visibility based on filter states
            if (this.searchTerm == '') {
                if (this.filterClass == true) {
                    // Show 'inClass' elements and hide 'extracurricular' elements
                    $('.inClass').each(function () {
                        $(this).show();
                    });
                    $('.extracurricular').each(function () {
                        $(this).hide();
                    });
                }

                if (this.filterExtras == true) {
                    // Show 'extracurricular' elements and hide 'inClass' elements
                    $('.extracurricular').each(function () {
                        $(this).show();
                    });
                    $('.inClass').each(function () {
                        $(this).hide();
                    });
                }
            } else {
                // If there is a search term, trigger the search method
                this.search();
            }
        }
    }
});

// Mount the Vue.js app to the DOM element with id 'vue_app'
app.mount("#vue_app");

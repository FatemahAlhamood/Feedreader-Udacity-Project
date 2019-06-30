/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
 /* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */


    // RSS Feeds suite that tests the feeds
    describe('RSS Feeds:', function () {
      /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        // Ensures that all feeds has been defined and they are not empty.
        it('Feeds are defined.', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a URL defined
                 * and that the URL is not empty.
                 */

        // Ensures that allFeeds have a url and that url is not empty.
        it('URL is defined and not empty.', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a name defined
                 * and that the name is not empty.
                 */

        // Ensures that allFeeds have a name and that name is not empty.
        it('Names are defined and not empty.', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */

    // New test suite which is going to test the menu.
    describe('The Menu:', function () {

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */

       //Ensures the menu element is hidden by default.
        it('Menu element is hidden by default.', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
                  * visibility when the menu icon is clicked. This test
                  * should have two expectations: does the menu display when
                  * clicked and does it hide when clicked again.
                  */

        // Ensures that the menu changes visibility when the menu icon is clicked ( shown & hidden).
        it('Menu is shown and hidden by clicking.', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries:', function() {

            var $feedResult;
            beforeEach(function(done) {
              loadFeed(0, function() {
                $feedResult = $(".feed .entry");
                done();
              });
            });
            /* TODO: Write a test that ensures when the loadFeed
                     * function is called and completes its work, there is at least
                     * a single .entry element within the .feed container.
                     * Remember, loadFeed() is asynchronous so this test will require
                     * the use of Jasmine's beforeEach and asynchronous done() function.
                     */

            // Ensures that loadFeed loads at least one entry.
            it('There is at least a single .entry element.', function() {
                expect($feedResult[0]).toBeDefined();
            });
        });

    /* TODO: Write a new test suite named "New Feed Selection" */
      describe('New Feed Selection:', function() {
        var inHTML;
        beforeEach(function(done) {
          loadFeed(0, function() {
            inHTML = window.document.querySelector(".feed").innerHTML;
            loadFeed(1, function() {
              done();
        });
      });
    });
    /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */

    // Ensures that the content actually changes.
    it('The content was changed.', function() {
      var newHTML = window.document.querySelector(".feed").innerHTML;
      expect(inHTML).not.toBe(newHTML);
    });
});
}())

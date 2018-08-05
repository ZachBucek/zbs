/* HOME */
$(document).ready(function() {

    // ARRAYS

    var poster = [  'images/posters_byYear/berlin_1936.png',
                    'images/posters_byYear/london_1948.png',
                    'images/posters_byYear/tokyo_1964.jpg',
                    'images/posters_byYear/mexicoCity_1968.jpg',
                    'images/posters_byYear/munich_1972.jpg',
                    'images/posters_byYear/moscow_1980.png',
                    'images/posters_byYear/losAngeles_1984.jpg',
                    'images/posters_byYear/seoul_1988.gif',
                    'images/posters_byYear/barcelona_1992.png',
                    'images/posters_byYear/atlanta_1996.png',
                    'images/posters_byYear/sydney_2000.png',
                    'images/posters_byYear/beijing_2008.jpg',
                    'images/posters_byYear/london_2012.png',
                    'images/posters_byYear/rio_2016.jpg' ];

    var city = ['BERLIN',
                'LONDON',
                'TOKYO',
                'MEXICO CITY',
                'MUNICH',
                'MOSCOW',
                'LOS ANGELES',
                'SEOUL',
                'BARCELONA',
                'ATLANTA',
                'SYDNEY',
                'BEIJING',
                'LONDON',
                'RIO' ];

    var track = [   'images/selections_bySport/track/berlin_1936_track.png',
                    'images/selections_bySport/track/london_1948_track.png',
                    'images/selections_bySport/track/tokyo_1964_track.png',
                    'images/selections_bySport/track/mexicoCity_1968_track.png',
                    'images/selections_bySport/track/munich_1972_track.png',
                    'images/selections_bySport/track/moscow_1980_track.png',
                    'images/selections_bySport/track/losAngeles_1984_track.png',
                    'images/selections_bySport/track/seoul_1988_track.png',
                    'images/selections_bySport/track/barcelona_1992_track.png',
                    'images/selections_bySport/track/atlanta_1996_track.png',
                    'images/selections_bySport/track/sydney_2000_track.png',
                    'images/selections_bySport/track/beijing_2008_track.png',
                    'images/selections_bySport/track/london_2012_track.png',
                    'images/selections_bySport/track/rio_2016_track.png'];

    var cycle = [   'images/selections_bySport/cycle/berlin_1936_cycle.png',
                    'images/selections_bySport/cycle/london_1948_cycle.png',
                    'images/selections_bySport/cycle/tokyo_1964_cycle.png',
                    'images/selections_bySport/cycle/mexicoCity_1968_cycle.png',
                    'images/selections_bySport/cycle/munich_1972_cycle.png',
                    'images/selections_bySport/cycle/moscow_1980_cycle.png',
                    'images/selections_bySport/cycle/losAngeles_1984_cycle.png',
                    'images/selections_bySport/cycle/seoul_1988_cycle.png',
                    'images/selections_bySport/cycle/barcelona_1992_cycle.png',
                    'images/selections_bySport/cycle/atlanta_1996_cycle.png',
                    'images/selections_bySport/cycle/sydney_2000_cycle.png',
                    'images/selections_bySport/cycle/beijing_2008_cycle.png',
                    'images/selections_bySport/cycle/london_2012_cycle.png',
                    'images/selections_bySport/cycle/rio_2016_cycle.png' ];

    var box = [     'images/selections_bySport/box/berlin_1936_box.png',
                    'images/selections_bySport/box/london_1948_box.png',
                    'images/selections_bySport/box/tokyo_1964_box.png',
                    'images/selections_bySport/box/mexicoCity_1968_box.png',
                    'images/selections_bySport/box/munich_1972_box.png',
                    'images/selections_bySport/box/moscow_1980_box.png',
                    'images/selections_bySport/box/losAngeles_1984_box.png',
                    'images/selections_bySport/box/seoul_1988_box.png',
                    'images/selections_bySport/box/barcelona_1992_box.png',
                    'images/selections_bySport/box/atlanta_1996_box.png',
                    'images/selections_bySport/box/sydney_2000_box.png',
                    'images/selections_bySport/box/beijing_2008_box.png',
                    'images/selections_bySport/box/london_2012_box.png',
                    'images/selections_bySport/box/rio_2016_box.png' ];

    var row = [     'images/selections_bySport/row/berlin_1936_row.png',
                    'images/selections_bySport/row/london_1948_row.png',
                    'images/selections_bySport/row/tokyo_1964_row.png',
                    'images/selections_bySport/row/mexicoCity_1968_row.png',
                    'images/selections_bySport/row/munich_1972_row.png',
                    'images/selections_bySport/row/moscow_1980_row.png',
                    'images/selections_bySport/row/losAngeles_1984_row.png',
                    'images/selections_bySport/row/seoul_1988_row.png',
                    'images/selections_bySport/row/barcelona_1992_row.png',
                    'images/selections_bySport/row/atlanta_1996_row.png',
                    'images/selections_bySport/row/sydney_2000_row.png',
                    'images/selections_bySport/row/beijing_2008_row.png',
                    'images/selections_bySport/row/london_2012_row.png',
                    'images/selections_bySport/row/rio_2016_row.png' ];

    var swim = [    'images/selections_bySport/swim/berlin_1936_swim.png',
                    'images/selections_bySport/swim/london_1948_swim.png',
                    'images/selections_bySport/swim/tokyo_1964_swim.png',
                    'images/selections_bySport/swim/mexicoCity_1968_swim.png',
                    'images/selections_bySport/swim/munich_1972_swim.png',
                    'images/selections_bySport/swim/moscow_1980_swim.png',
                    'images/selections_bySport/swim/losAngeles_1984_swim.png',
                    'images/selections_bySport/swim/seoul_1988_swim.png',
                    'images/selections_bySport/swim/barcelona_1992_swim.png',
                    'images/selections_bySport/swim/atlanta_1996_swim.png',
                    'images/selections_bySport/swim/sydney_2000_swim.png',
                    'images/selections_bySport/swim/beijing_2008_swim.png',
                    'images/selections_bySport/swim/london_2012_swim.png',
                    'images/selections_bySport/swim/rio_2016_swim.png' ];

    // POSTER BY YEAR

    var current_imgPath="images/posters_byYear/berlin_1936.jpg";
    $('#years a').click(function(evt) {
        evt.preventDefault();
        $('#selection #image img').remove();
        $('#selection #text p').remove();
        var imgPath = $(this).attr('href');
        if (imgPath != current_imgPath) {
            current_imgPath = imgPath;

            var oldImage = $('#poster img');
            var newImage = $('<a href="#"><img src="' + imgPath + '"></a>');
            newImage.hide();

            $('#poster').prepend(newImage);
            oldImage.fadeOut(500, function() {
                $(this).remove();
            newImage.fadeIn(500);
            });
        } // end if statement
    }); // end click


    // SELECTIONS BY SPORT

    //TRACK

    $('#track').on({
        'hover': trackHover(),
        'click': function () {
            var currentPosterPath = $('#poster a img').attr('src');
            for (var i=0; i < poster.length; i++) {
            if (currentPosterPath == poster[i]) {
                $('#selection #image img').remove();
                $('#selection #text p').remove();
                $('<img src="' + track[i] + '">').appendTo($('#selection #image'));
                $('<p>' + city[i] + '</p>').appendTo($('#selection #text'));
                $('#selection img').css({
                    'border': '2px dashed #009F3D'
                });
            } else if (currentPosterPath == poster[i+1]) {
                $('#selection #image img').replaceWith('<img src="' + track[i+1] + '">');
                $('#selection #text p').replaceWith('<p>' + city[i+1] + '</p>');
                $('#selection img').css({
                    'border': '2px dashed #009F3D'
                });
            } // end else if
            } // end for loop
        } // end click
    }); // end on

    function trackHover() {
    $('#track').hover(function() {
            $(this).css({
                'background-color' : '#009F3D',
                'color' : 'white'
            });
        },
        function() {
            $(this).css({
                'background-color' : 'white',
                'color' : '#009F3D'
            });
        }); // end hover
    } // end function


    // CYCLE

    $('#cycle').on({
        'hover': cycleHover(),
        'click': function () {
            var currentPosterPath = $('#poster a img').attr('src');
            for (var i=0; i < poster.length; i++) {
                if (currentPosterPath == poster[i]) {
                    $('#selection #image img').remove();
                    $('#selection #text p').remove();
                    $('<img src="' + cycle[i] + '">').appendTo($('#selection #image'));
                    $('<p>' + city[i] + '</p>').appendTo($('#selection #text'));
                    $('#selection img').css({
                        'border': '2px dashed black'
                    });
                } else if (currentPosterPath == poster[i+1]) {
                    $('#selection #image img').replaceWith('<img src="' + cycle[i+1] + '">');
                    $('#selection #text p').replaceWith('<p>' + city[i+1] + '</p>');
                    $('#selection img').css({
                        'border': '2px dashed black'
                    });
                } // end else if
            } // end for loop
        } // end click
    }); // end on

    function cycleHover() {
    $('#cycle').hover(function() {
            $(this).css({
                'background-color' : 'black',
                'color' : 'white'
            });
        },
        function() {
            $(this).css({
                'background-color' : 'white',
                'color' : 'black'
            });
        }); // end hover
    } // end function


    // BOX

    $('#box').on({
        'hover': boxHover(),
        'click': function () {
            var currentPosterPath = $('#poster a img').attr('src');
            for (var i=0; i < poster.length; i++) {
                if (currentPosterPath == poster[i]) {
                    $('#selection #image img').remove();
                    $('#selection #text p').remove();
                    $('<img src="' + box[i] + '">').appendTo($('#selection #image'));
                    $('<p>' + city[i] + '</p>').appendTo($('#selection #text'));
                    $('#selection img').css({
                        'border': '2px dashed #DF0024'
                    });
                } else if (currentPosterPath == poster[i+1]) {
                    $('#selection #image img').replaceWith('<img src="' + box[i+1] + '">');
                    $('#selection #text p').replaceWith('<p>' + city[i+1] + '</p>');
                    $('#selection img').css({
                        'border': '2px dashed #DF0024'
                    });
                } // end else if
            } // end for loop
        } // end click
    }); // end on

    function boxHover() {
    $('#box').hover(function() {
            $(this).css({
                'background-color' : '#DF0024',
                'color' : 'white'
            });
        },
        function() {
            $(this).css({
                'background-color' : 'white',
                'color' : '#DF0024'
            });
        }); // end hover
    } // end function


    // ROW

    $('#row').on({
        'hover': rowHover(),
        'click': function () {
            $(this).css({
                'background-color' : '#F4C300',
                'color' : 'white'
            });
            var currentPosterPath = $('#poster a img').attr('src');
            for (var i=0; i < poster.length; i++) {
                if (currentPosterPath == poster[i]) {
                    $('#selection #image img').remove();
                    $('#selection #text p').remove();
                    $('<img src="' + row[i] + '">').appendTo($('#selection #image'));
                    $('<p>' + city[i] + '</p>').appendTo($('#selection #text'));
                    $('#selection img').css({
                        'border': '2px dashed #F4C300'
                    });
                } else if (currentPosterPath == poster[i+1]) {
                    $('#selection #image img').replaceWith('<img src="' + row[i+1] + '">');
                    $('#selection #text p').replaceWith('<p>' + city[i+1] + '</p>');
                    $('#selection img').css({
                        'border': '2px dashed #F4C300'
                    });
                } // end else if
            } // end for loop
        } // end click
    }); // end on

    function rowHover() {
    $('#row').hover(function() {
            $(this).css({
                'background-color' : '#F4C300',
                'color' : 'white'
            });
        },
        function() {
            $(this).css({
                'background-color' : 'white',
                'color' : '#F4C300'
            });
        }); // end hover
    } // end function

    // SWIM

    $('#swim').on({
        'hover': swimHover(),
        'click': function () {
            var currentPosterPath = $('#poster a img').attr('src');
            for (var i=0; i < poster.length; i++) {
                if (currentPosterPath == poster[i]) {
                    $('#selection #image img').remove();
                    $('#selection #text p').remove();
                    $('<img src="' + swim[i] + '">').appendTo($('#selection #image'));
                    $('<p>' + city[i] + '</p>').appendTo($('#selection #text'));
                    $('#selection img').css({
                        'border': '2px dashed #0085C7'
                    });
                } else if (currentPosterPath == poster[i+1]) {
                    $('#selection #image img').replaceWith('<img src="' + swim[i+1] + '">');
                    $('#selection #text p').replaceWith('<p>' + city[i+1] + '</p>');
                    $('#selection img').css({
                        'border': '2px dashed #0085C7'
                    });
                } // end else if
            } // end for loop
        } // end click
    }); // end on

    function swimHover() {
    $('#swim').hover(function() {
            $(this).css({
                'background-color' : '#0085C7',
                'color' : 'white'
            });
        },
        function() {
            $(this).css({
                'background-color' : 'white',
                'color' : '#0085C7'
            });
        }); // end hover
    } // end function

/* ABOUT */

        var p1 = '<p>OLYMPIC PICTOGRAMS is an image archive dedicated to the rich tradition and graphic inventiveness of pictorial art from the Olympic Games.</p>';
        var p2 = '<p>Through our site you can:</p>'
        var p3 = '<p>Browse pictograms from an image archive by year and sport.</p>';
        var p4 = '<p>Create and customize your own poster.</p>';
        $(p1).appendTo($('#about div')).hide().fadeIn(1000);
        $(p2).appendTo($('#about div')).hide().fadeIn(5000);
        $(p3).appendTo($('#about div')).hide().fadeIn(5000);
        $(p4).appendTo($('#about div')).hide().fadeIn(5000);

}); // end document ready

/*--------------------------------------------------------------*/

/* CREATE */

function checkMe() {
    var error = "";
    var chooseButton = document.forms[0].choose;
    var valid = false;
    var email = document.getElementById('email').value
    var reg_exp_email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    var isValid = reg_exp_email.test(email);

    if (document.getElementById('myname').value == "") {
        error += "Please enter your name.\n";
    }
    //add conditional logic here to validate street address and city
    if (document.getElementById('address').value == "") {
        error += "Please enter your address.\n";
    }
    if (document.getElementById('city').value == "") {
        error += "Please enter your city.\n";
    }
    if (document.getElementById('state').selectedIndex == 0) {
        error += "Please choose a state.\n";
    }
    //add conditional logic here to validate all fields after state.
    if (document.getElementById('zip').value == "") {
        error += "Please enter your zip code.\n";
    }
    if (document.getElementById('phone').value == "") {
        error += "Please enter your phone #.\n";
    }
    if (document.getElementById('email').value == "") {
        error += "Please enter your email address.\n";
    }
    if (!isValid) {
        error += "Please enter a valid email address.\n";
    }

        for (var i=0; i<chooseButton.length; i++) {
        if (chooseButton[i].checked) {
            valid = true;
            break;
        }
    }
    if(!valid) {
        error += "Please choose a sport.\n";
    }
    if(error=="") {
        return true;
    }
    else {
        alert(error);
        return false;
    }
}
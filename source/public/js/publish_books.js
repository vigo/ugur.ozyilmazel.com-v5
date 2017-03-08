$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'https://api.gitbook.com/author/vigo/books',
        dataType: "json",
        error: function(err){
            $("#published-books").html('Gitbook&rsquo;dan kitapları&rsquo;ları yükleyemedim...');
        },
        success: function(data){
            var html = [];
            $.each(data.list, function(index, book){
                html.push('<div class="book">');
                    html.push('<h3>' + book.title + '</h3>');
                    html.push('<div class="row">');
                
                        html.push('<div class="col-md-3">');
                            html.push('<div class="book-cover">');
                                html.push('<img class="img-fluid" src="https://www.gitbook.com' + book.cover.large + '" alt="' + book.title + '">');
                            html.push('</div>');
                        html.push('</div>');
                        html.push('<div class="col-md-9">');
                            html.push('<p>' + book.description + '</p>');
                            html.push('<p class="book-links">');
                                html.push('<a href="' + book.urls.homepage + '"><i class="fa fa-home fa-1x"></i></a>');
                                html.push('<a href="' + book.urls.git + '"><i class="fa fa-code-fork fa-1x"></i></a>');
                                html.push('<a href="' + book.urls.read + '"><i class="fa fa-book fa-1x"></i></a>');
                                html.push('<a href="' + book.urls.download.pdf + '"><i class="fa fa-file-pdf-o fa-1x"></i></a>');
                            html.push('</p>');
                        html.push('</div>');
                
                    html.push('</div>');
                html.push('</div>');
            });
            $("#published-books").html(html.join("\n"));
        }
    });
});
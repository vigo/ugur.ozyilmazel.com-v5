$(document).ready(function(){$.ajax({type:"GET",url:"https://api.gitbook.com/author/vigo/books",dataType:"json",error:function(){$("#published-books").html("Gitbook&rsquo;dan kitaplar\u0131&rsquo;lar\u0131 y\xfckleyemedim...")},success:function(s){var a=[];$.each(s.list,function(s,o){a.push('<div class="book">'),a.push("<h3>"+o.title+"</h3>"),a.push('<div class="row">'),a.push('<div class="col-md-3">'),a.push('<div class="book-cover">'),a.push('<img class="img-fluid" src="https://www.gitbook.com'+o.cover.large+'" alt="'+o.title+'">'),a.push("</div>"),a.push("</div>"),a.push('<div class="col-md-9">'),a.push("<p>"+o.description+"</p>"),a.push('<p class="book-links">'),a.push('<a href="'+o.urls.homepage+'"><i class="fa fa-home fa-1x"></i></a>'),a.push('<a href="'+o.urls.git+'"><i class="fa fa-code-fork fa-1x"></i></a>'),a.push('<a href="'+o.urls.read+'"><i class="fa fa-book fa-1x"></i></a>'),a.push('<a href="'+o.urls.download.pdf+'"><i class="fa fa-file-pdf-o fa-1x"></i></a>'),a.push("</p>"),a.push("</div>"),a.push("</div>"),a.push("</div>")}),$("#published-books").html(a.join("\n"))}})});
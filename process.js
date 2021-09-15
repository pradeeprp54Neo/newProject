$(function(){

      $('p').calculateResult();
    
    });


    $('p').calculateResult({
        
          passmarks: 33
        
        });  


        
$('p').calculateResult({

  marks: [80, 70, 60, 50, 40, 33],

  grades: ['A+','A','A-','B','C','D'],

  points: [5.00, 4.00, 3.50, 3.00, 2.00, 1.00, 0.00]

});


$('p').calculateResult({
    
      success:function(response) {
    
        var result = response,
    
            mark = response.mark;
    
        console.log(response);
    
        console.log(mark + 10);
    
      }
    
    });
    

    
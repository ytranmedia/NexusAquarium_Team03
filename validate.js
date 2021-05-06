
              $(document).ready(function(){
                  $("#form-horizontal").bootstrapValidator({
                        container: '#Thongbaoloi',
                        excluded: 'disable',
                        fields: {
                          fullname: {
                                validators: {
                                    notEmpty:{
                                        message: '*  Full name is empty'
                                    },
                                    regexp: {
                                        regexp: /^[A-Z\s]+$/i,
                                        message: 'Full name must include a-Z'
                                    }
                                }
                            },
                            email: {
                                validators: {
                                    notEmpty:{
                                        message: '*  Last name is empty'
                                    },
                                    regexp: {
                                        regexp: /^[A-Z\s]+$/i,
                                        message: 'last name must include a-Z'
                                    }
                                }
        
                            },
                            feedback: {
                                validators: {
                                    notEmpty:{
                                        message: '* Email is empty'
                                    },
                                    emailAddress:{
                                        message: '* please enter type name@gmail.com'
                                    }
                                }
        
                            },
                            
                            Phonenum: {
                                validators: {
                                    notEmpty:{
                                        message: '* Phone number is empty'
                                    },
                                    regexp:{
                                        regexp: /^([0-9]{8,12})+$/i,
                                        message: '* Wrong number'
                                    }
                                }
        
                            }
        
                        },
        
                  });
              });
             
              $(function () {  
                  $("#datepicker").datepicker({         
                  autoclose: true,         
                  todayHighlight: true 
                  }).datepicker('update', new Date());
                  });
          
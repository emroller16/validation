  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
       
        feedbackIcons: {
  
        },
        message: null,
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                    }
                }
            },
            email: {
                validators: {
                    stringLength: {
                        min: 35,
                    },
                    notEmpty: {
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                    },
                    phone: {
                        country: 'US',
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 35,
                    },
                    notEmpty: {
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                    },
                    zipCode: {
                        country: 'US',
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                     },
                    notEmpty: {
                    }
                    }
                }
            }
        })
        
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });



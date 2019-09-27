
        angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope,contatosAPI,serialGenerator,$location,operadoras){
                                                                                                                        //esse nome operadora vem do resolve do router
            $scope.operadoras = operadoras.data;
            $scope.contatos = [];


            $scope.adicionarContato = function(contato){   
                contato.serial = serialGenerator.generate();
                contato.data = new Date();
                $scope.contatos.push(contato);
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                
                //contatosAPI.saveContato(contato).then(function(data){
                    //delete $scope.contato;
                    //$scope.contatoForm.$setPristine();
                    $location.path("/contatos");


                    
                    //$scope.contatos.push(data); // outra opcao???
                    //$scope.contatos.push(angular.copy(contatos)); // outra opcao?
                    //pegar um retorno do backend(um 201 created?), voltar a entidade? e colocar ela na lista?
                //});
              
            };

         
        });
        

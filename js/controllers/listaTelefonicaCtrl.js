
        angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope,$filter,contatosAPI,operadorasAPI,serialGenerator){
            $scope.app = "Lista Telefonica";
            $scope.operadoras = [];
            $scope.contatos = [];

            //So preciso criar as coisas atreladas a $scope se eu for mostrar/usar na view
            var carregarContatos = function (){
                contatosAPI.getContatos().then(function(data,status){
                    $scope.contatos = data.data;
                }).catch(function(data,status){
                    $scope.message = "Erro de carregamento: " + data.status;
                });
            };

            var carregarOperadoras = function(){
               operadorasAPI.getOperadoras().then(function(data,status){
                    $scope.operadoras = data.data;
                }).catch(function(data,status){
                    $scope.message = "Erro de carregamento: " + data.status;
                });
            };


            $scope.adicionarContato = function(contato){   
                contato.serial = serialGenerator.generate();
                contato.data = new Date();
                $scope.contatos.push(contato);
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                
                //contatosAPI.saveContato(contato).then(function(data){
                    //delete $scope.contato;
                    //$scope.contatoForm.$setPristine();
                    //carregarContatos(); Ver o custo da performance
                    //$scope.contatos.push(data); // outra opcao???
                    //$scope.contatos.push(angular.copy(contatos)); // outra opcao?
                    //pegar um retorno do backend(um 201 created?), voltar a entidade? e colocar ela na lista?
                //});
              
            };

            $scope.apagarContatos = function (contatos){
             $scope.contatos =  contatos.filter(function(contato){
                      if (!contato.selecionado) return contato;
                });
            };
            //essa fun��o n est� otimizada, prejudiva perfomance
            $scope.isContatoSelecionado = function(contatos){
                return contatos.some(function(contato){
                    return contato.selecionado;
                });
            }

            $scope.ordernarPor = function (campo){
                $scope.criterio = campo;
                $scope.direcaoOrd = !$scope.direcaoOrd; //a primeira vez que ele � setado no codigo ele vem como undefined
                                                      // que por padr�o � false   
            }

            carregarContatos();
            carregarOperadoras();
        });
        

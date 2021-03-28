import json, os.path, os

def clear(): os.system('cls') #on Windows System


def init_simulator():
  elements_file = open(os.path.dirname(__file__)+'\elements.json', encoding="utf8")
  elements_data = json.load(elements_file)
  reactions_file = open(os.path.dirname(__file__)+'\components.json', encoding="utf8")
  reactions_data = json.load(reactions_file)

  option = 1
  table = []
  symbolOfElements_onTable = []

  while option != 0:
    print("\n---------------------------------------------------------")
    element = input("Escolha um elemento da tabela periódica: ")
    isValid = False
    for tableElement in elements_data:
      if element == tableElement["symbol"]:
        isValid = True
        table.append(tableElement)
        symbolOfElements_onTable.append(tableElement["symbol"])

    if isValid == False: print("Elemento inválido")
    else:
      # Mostra os elementos que estão dentro da tabela de ação
      clear()
      print("Elementos dentro da tabela:")
      print(symbolOfElements_onTable,"\n-------------------------------\n")

      #Verifica as reações possíveis
      if (len(symbolOfElements_onTable) > 1):
        for reaction in reactions_data:
          reaction_table = []
          elementIndex = 0
          for reaction_element in reaction["elements"]:
            if elementIndex in symbolOfElements_onTable:
              if symbolOfElements_onTable[elementIndex] == reaction_element
                reaction_table.append(reaction_element)
            elementIndex = elementIndex + 1
              

            print(reaction_table)
            if sorted(reaction_table) == sorted(reaction["elements"]):
              print("Uma reação ocorreu! ",reaction_table," = ",reaction["symbol"])
              symbolOfElements_onTable.append(reaction["symbol"])
              for index in reaction_table:
                if index in symbolOfElements_onTable: symbolOfElements_onTable.remove(index)
            
          




              # if (sorted(reactionSymbols) == sorted(reaction["elements"])) == True:
              #   print("Ocorreu uma reação: ")
              #   for element in table:
              #     print(element["symbol"])
              #   print(" = ",reaction["symbol"],"!!!")
              #   for element in reactionTable:
              #     if element in table: table.remove(element)
              #   CanReact = True
              #   table.append(reaction)

def new_reaction():
  print("b")



if __name__ == "__main__":
  option = None
  while option != 0:
    print("\nPROTÓTIPO DO SIMULADOR V0.0.1")
    print(
    """
    [0] - Sair
    [1] - Iniciar simulador
    [2] - Criar nova reação
    """)
    option = int(input("Escolha: "))
    
    if option == 0: print("SAINDO...")
    elif option == 1: init_simulator()
    elif option == 2: new_reaction()
    else: print("Opção inválida!")
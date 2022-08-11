 @full @API
 Feature: Ejemplo API testing
    Scenario: Búsqueda de herramienta en json de respuesta
        Given As a user I want to execute a GET for all "tools"
        Then Verify '@get_tools_data' response status code is 200
        And Verify response details for tool "PEX Clamp Tool"

    Scenario Outline: Ejemplo de API testing con Scenario Outline
        Given As a user I want to execute a GET for all "tools"
        Then Verify '@get_tools_data' response status code is 200
        And Verify response details for tool <ToolName>
        Examples:
            | ToolName | 
            | "PEX Clamp Tool"  |
            | "GENMAX 3200 Watt Inverter Generator" |
            | "20V Max Drill & Home Tool Kit" |
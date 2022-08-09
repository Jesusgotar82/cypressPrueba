 @full @API
 Feature: API EXAMPLE
    Scenario: example of GET
        Given As a user I want to execute a GET for all "tools"
        Then Verify '@get_tools_data' response status code is 200
        And Verify response details for tool "PEX Clamp Tool"
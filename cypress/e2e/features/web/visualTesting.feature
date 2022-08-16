@full
Feature: Viasual testing
    Scenario: Visual testing Example
        Given A user opens the <url> website
        Then The page title has the text "Welcome to Next.js!"
        Examples:
            | url |
            | "http://localhost:3000/" |
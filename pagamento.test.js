const { By, Builder} = require("selenium-webdriver");

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
});

afterAll(async () => {
    await driver.quit();
});

describe("Teste Formulário de Pagamento", () => {
    test("deveria abrir a página do formulário de pagamento", async () => {
        await driver.get("http://127.0.0.1:5500/index.html");
    });

    test("deveria conter o texto 'Exemplo Form' no title", async () => {
        await driver.get("http://127.0.0.1:5500/index.html");

        const title = await driver.getTitle();

        expect(title).toBe("Exemplo Form");
    });

    test("deveria interagis com 'nome', 'sobrenome', 'endereço' e número", async () => {
        // await driver.get("http://127.0.0.1:5500/index.html");

        driver.findElement(By.id("nome")).sendKeys("Maria");
        driver.findElement(By.id("sobrenome")).sendKeys("Silva");
        driver.findElement(By.id("endereco")).sendKeys("Av. Conde da Boa Vista");
        driver.findElement(By.id("numero")).sendKeys("940028922");
    });

    test("deveria interagir com estado", async () => {
        // await driver.get("http://127.0.0.1:5500/index.html");

        let estadoSelect = await driver.findElement(By.id("estado"));
        const options = await estadoSelect.findElements(By.tagName('option'));

        for (const option of options){
            const optionText = await option.getText();
            if (optionText === 'Pernambuco'){
                var selectedOptionValue = await option.getAttribute('value');
                await option.click();
                break;
            }
        }
        expect(selectedOptionValue).toBe('pe');
    });

    test("deveria interagir com cidade", async () => {
        // await driver.get("http://127.0.0.1:5500/index.html");

        let cidadeSelect = await driver.findElement(By.id("cidade"));
        const options = await cidadeSelect.findElements(By.tagName('option'));

        for (const option of options){
            const optionText = await option.getText();
            if (optionText === 'Recife'){
                var selectedOptionValue = await option.getAttribute('value');
                await option.click();
                break;
            }
        }
        expect(selectedOptionValue).toBe('recife');
    });


    test("deveria interagir com checkbox", async () => {
        let salvarInfo = driver.findElement(By.id("salvar-info")).click();

        expect(salvarInfo).toBeTruthy();
    });

    test("deveria interagir com radiobutton 'pix'", () => {
        driver.findElement(By.id("pix")).click();

        expect(driver.findElement(By.id("pix")).isSelected()).toBeTruthy();

    });

    test("deveria interagir com botão 'submit'", async () => {
        await driver.findElement(By.id("submit")).click();
    })

});
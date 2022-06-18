package gameManiaTeste;

import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class testeLoginGM {
	private WebDriver driver;
	
	@Before
	
	public void abrirNavegador() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:4200/login");
	}
	
	@Test
	public void testeNavegador() {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
		WebElement inputEmail = driver.findElement(By.id("email-usuario"));
		WebElement inputSenha = driver.findElement(By.id("password-usuario"));
		WebElement botaoLogin = driver.findElement(By.id("botao-enviar"));
		
		String[] listaSenhas = {"senha1", "outrasenha", "senhaerrada", "mandiocafrita1234"};
		for(int tentativas = 0; tentativas < listaSenhas.length; tentativas++) {
			
			try {
			inputEmail.clear();
			inputSenha.clear();
			
			inputEmail.sendKeys("maria@mail.com");
			inputSenha.sendKeys(listaSenhas[tentativas]);
			botaoLogin.click();
			
			Thread.sleep(3000);
			
			}catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}

# node-middleware-next

## Here first called logger function because it called before the api.
![image](https://user-images.githubusercontent.com/58978406/100623166-c7a36180-3347-11eb-967d-a1ddd8919fa2.png)

### output
![image](https://user-images.githubusercontent.com/58978406/100623388-1a7d1900-3348-11eb-9928-2bfedc59d95c.png)

## Here, the logger function is not called because it placed after the api and there is no next exist in api
![image](https://user-images.githubusercontent.com/58978406/100623482-3d0f3200-3348-11eb-9268-0254e88b232e.png)

### output
![image](https://user-images.githubusercontent.com/58978406/100623607-6465ff00-3348-11eb-92e3-506cfd0b4ed8.png)

## Here we have added next in api , therefor the logger fucntion is called. Thats what next do, if there is any middleware after api and we want to call it so we use next so if there is any middleware function then it will run.
![image](https://user-images.githubusercontent.com/58978406/100623861-bc046a80-3348-11eb-88ae-65cdf0641b49.png)

### output
![image](https://user-images.githubusercontent.com/58978406/100623944-d6d6df00-3348-11eb-87aa-11f94e74c012.png)


## Here, if we pass false in params then it will show no Auth.
![image](https://user-images.githubusercontent.com/58978406/100624117-08e84100-3349-11eb-9702-d26fd4ee08d6.png)
![image](https://user-images.githubusercontent.com/58978406/100624149-130a3f80-3349-11eb-98d1-62a3e572b077.png)


### output
![image](https://user-images.githubusercontent.com/58978406/100624233-3634ef00-3349-11eb-8496-3a759cd84e4b.png)


import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import sys
import json


def multiple_linear_regression():
    # Чтение данных
    print("dscdsd")

    dataset = pd.read_csv("./js/realest.csv")

    # Выбираем необходимые столбцы для анализа
    X = dataset.iloc[:, :-1].values  # Факторы (независимые переменные)
    y = dataset.iloc[:, -1].values  # Зависимая переменная (урожайность)

    # Разделение данных на тренировочный и тестовый наборы
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

    # Создание и обучение модели множественной линейной регрессии
    regressor = LinearRegression()
    regressor.fit(X_train, y_train)

    # Прогнозирование на тестовых данных
    y_pred = regressor.predict(X_test)

    # Оценка качества модели
    mse = mean_squared_error(y_test, y_pred)

    # Возвращаем прогноз и ошибку
    return y_pred.tolist(), mse


if __name__ == "__main__":
    predictions, error = multiple_linear_regression()
    result = {"predictions": predictions, "error": error}
    print(json.dumps(result))
import numpy as np
from sklearn.linear_model import LinearRegression

# training dataset
X = np.array([
[1,50,40],
[2,60,45],
[3,70,50],
[4,75,55],
[5,80,60],
[6,85,70],
[7,90,75]
])

y = np.array([40,45,50,60,70,80,90])

model = LinearRegression()
model.fit(X,y)

def handler(request):

    data=request.json()

    hours=float(data["hours"])
    attendance=float(data["attendance"])
    internal=float(data["internal"])

    pred=model.predict([[hours,attendance,internal]])

    return {
        "prediction": round(float(pred[0]),2)
    }

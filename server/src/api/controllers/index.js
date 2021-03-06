export {
    loginAdmin,
    signup
}
from "./adminController"

export {
    createManager,
    removeManager,
    updateManager,
    getAllManagers,
    getManager
}
from "./managerController"
export {
    createDeliveryManager,
    removeDeliveryManager,
    updateDeliveryManager,
    getAllDeliveryManager,
    getDeliveryManager
}
from "./deliverymanagerController"
export {
    createDriver,
    removeDriver,
    updateDriver,
    getAllDrivers,
    getDriver
}
from "./driverController"

export {
    login,
    logout
}
from "./authController"

export {
    getVehicleType,
    getAllVehicleType,
    addVehicleType,
    getIDVehicleType,
    deleteVehicleType,
    updateVehicleType
}
from "./vehicleTypeController";

export {
    addDelivery,
    getDelivery,
    getAllDeliveries,
    updateDeliveryStatus,
    asignDelivery,
    removeDelivery
}
from "./deliveryController";
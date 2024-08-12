const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set("strictQuery", false)

main().catch((err) => console.log(err))

const url = 'mongodb://r00t:0xFIDAtnDvgXzy@192.168.0.215:27017/fitness_app'
const muscleGroups = ['arms','chest','back','legs','shoulders','cardio']
const warnings = ['pulled_muscles',"form_focused","high_balance_required"]
const categories = ["HIIT","conditioning","cooldown","stretch","warm-up"]
const specialties = ["Male","Female","Bodyweight","Yoge","Bootcamp","Strength Training"]

const validateMuscleGroups = (array) => {
    return array.every(value => muscleGroups.includes(value));
}

const validateWarnings = (array) => {
    return array.every(value => warnings.includes(value));
}

const validateCategories = (array) => {
    return array.every(value => categories.includes(value));
}

const validateSpecialties = (array) => {
    return array.every(value => specialties.includes(value));
}

async function main() {
    await mongoose.connect(url)
}

let models = {}

const userSchema = new Schema({
    created_date : {type: Date, default: Date.now()},
    email : String,
    height : Double,
    weight : Double,
    last_workout_datetime : Date,
    last_workout_status : String,
    workouts_complete : Integer,
    trainer_preferences : String,
    current_trainer : String,
    isTrainer : Boolean
})

models.userModel = mongoose.model("userModel", userSchema);

const exerciseSchema = new Schema ({
    created_date : {type: Date, default: Date.now()},
    target_muscle_groups : {
        type : [String],
        validate : {
            validator : validateMuscleGroups(),
            message : 'Array elements must be of: {0}',
            props : muscleGroups
        }},
    equipmentRequired : Boolean,
    reps_duration : String, //should be one or the other
    duration_count : Integer, //should be reps or duration in minutes; sets can be handled by repeating this document
    warnings :  {
        type : [String],
        validate : {
            validator : validateWarnings(),
            message : 'Array elements must be of: {0}',
            props : warnings
        }},
    purpose :
        {
            type : String,
            enum : ["cardio","strength-building"]
        },
    category : [String]
})

models.exerciseModel = mongoose.model("exerciseModel", exerciseSchema);

const trainerSchema = new Schema({
    created_date : {type: Date, default: Date.now()},
    current_student_count : Integer,
    max_student_count : Integer,
    experience : Integer, //months of experience training
    specialty :  {
        type : [String],
        validate : {
            validator : validateSpecialties(),
            message : 'Array elements must be of: {0}',
            props : specialties
        }},
    current_students : [String] //email or userDocumentId
})

models.trainerModel = mongoose.model("trainerModel", trainerSchema);

const reviewSchema = new Schema({
    created_date : {type: Date, default: Date.now()},
    reviewer_email : String,
    stars : Integer,
    review : String
})

models.reviewModel = mongoose.model("reviewModel", reviewSchema);

const workoutSchema  = new Schema({
    created_date : {type: Date, default: Date.now()},
    equipmentRequired : Boolean,
    target_muscle_groups : {
        type : [String],
        validate : {
            validator : validateMuscleGroups(),
            message : 'Array elements must be of: {0}',
            props : muscleGroups
        }},
    est_duration : Integer,
    exercises : [String], //an array of exercise ids
    catgories : {
        type : [String],
        validate : {
            validator : validateCategories(),
            message : 'Array elements must be of: {0}',
            props : categories
        }}
})

models.workoutModel = mongoose.model("workoutModel", workoutSchema);

module.exports = models
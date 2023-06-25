<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UserSymptomsSearch extends Model
{
    use HasFactory;

    protected $table = 'user_symptoms_search';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'symptoms'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'symptoms' => 'array'
    ];

    /**
     * Get the diagnoses for this search
     */
    public function diagnoses(): HasMany
    {
        return $this->hasMany(Diagnose::class);
    }
}

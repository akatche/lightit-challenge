<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Diagnose extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_symptoms_search_id',
        'name',
        'accuracy',
        'specialists',
        'correct'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'specialists' => 'array',
        'correct' => 'boolean'
    ];

    /**
     * Get the diagnoses for this search
     */
    public function search(): BelongsTo
    {
        return $this->belongsTo(UserSymptomsSearch::class,'user_symptoms_search_id');
    }
}
